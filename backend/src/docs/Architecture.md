# Architecture du Projet

```
devjournal/
│
├── frontend/
│ ├── index.html
│ ├── css/
│ │ └── style.css
│ └── js/
│ ├── api.js
│ ├── notes.js
│ ├── filters.js
│ └── app.js
│
├── backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── app.js
│ │ ├── routes/                     #associe les URL aux fonctions.
│ │ │ └── noteRoutes.js
│ │ ├── controllers/                #reçoit la requête HTTP et prépare la réponse.
│ │ │ └── noteController.js
│ │ ├── services/                   #porte les règles métier.
│ │ │ └── noteService.js
│ │ ├── repositories/               #gère le stockage et la récupération des notes.
│ │ │ └── noteRepository.js
│ │ ├── middlewares/                #exécute les traitements transversaux.
│ │ │ ├── validateNote.js
│ │ │ ├── requestLogger.js
│ │ │ ├── notFound.js
│ │ │ └── errorHandler.js
│ │ └── server.js
│ └── package.json
│
└── README.md
```
