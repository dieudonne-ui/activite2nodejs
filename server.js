const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Permet de traiter les requêtes en JSON
app.use(cors());

// Connexion à MongoDB
mongoose.connect("mongodb://localhost:27017/taskBD")
    .then(() => console.log("✅ Connecté à MongoDB"))
    .catch(err => console.error("❌ Erreur de connexion à MongoDB :", err));

// Définition du schéma de la tâche
const taskSchema = new mongoose.Schema({nom: String,
    description: String
});

const Task = mongoose.model("Task", taskSchema);

// Routes CRUD

// Lire toutes les tâches
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Créer une tâche
app.post("/tasks", async (req, res) => {
    try {
        const task = new Task({ nom: req.body.nom , description: req.body.description });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lire une tâche par ID
app.get("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mettre à jour une tâche
app.put("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { description: req.body.description }, { new: true });
        if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json(task);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Supprimer une tâche
app.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
        res.json({ message: "Tâche supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
