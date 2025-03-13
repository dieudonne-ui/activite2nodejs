# activite2nodejs

API RESTful de gestion des tâches

Description

Cette API permet de gérer une liste de tâches en effectuant des opérations CRUD (Écrire, Lire, Mettre à jour, Supprimer). Les données sont stockées dans une base MongoDB.

Fonctionnalités

Création d'une tâche (POST /tasks)

Lecture de toutes les tâches (GET /tasks)

Lecture d'une tâche spécifique (GET /tasks/:id)

Mise à jour d'une tâche (PUT /tasks/:id)

Suppression d'une tâche (DELETE /tasks/:id)

Technologies utilisées

Node.js

Express.js

MongoDB avec Mongoose

Postman pour les tests


Installation

1. Cloner le dépôt

git clone <URL_DU_DEPOT>
cd mon-api

2. Installer les dépendances

npm install

3. Configurer la base de données

Assurez-vous que MongoDB est installé et en cours d'exécution sur mongodb://localhost:27017/taskBD.
Si besoin, modifiez l'URL de connexion dans server.js :

mongoose.connect("mongodb://localhost:27017/taskBD", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

4. Lancer le serveur

node server.js

Ou avec nodemon (si installé) pour un rechargement automatique :

npx nodemon server.js

Le serveur sera disponible sur http://localhost:3000.

Utilisation avec Postman

Exemple de requêtes

Créer une tâche (POST /tasks)

URL : http://localhost:3000/tasks

Body (JSON) :

{
  "description": "Faire les courses"
}

Lister toutes les tâches (GET /tasks)

URL : http://localhost:3000/tasks

Obtenir une tâche par ID (GET /tasks/:id)

URL : http://localhost:3000/tasks/ID_DE_LA_TACHE

Mettre à jour une tâche (PUT /tasks/:id)

URL : http://localhost:3000/tasks/ID_DE_LA_TACHE

Body (JSON) :

{
  "description": "Acheter du pain et du lait"
}

Supprimer une tâche (DELETE /tasks/:id)

URL : http://localhost:3000/tasks/ID_DE_LA_TACHE


Auteur

NWEMOU DIEUDONNE - [66038512]

