# Product Backlog & User Stories — DevJournal

**Version :** 1.1  
**Référence :** PRD-DevJournal v1.1  
**Périmètre :** MVP — Sprint week-end

## Thème 1 — Gestion des notes (API REST)

### US-101 — Création d'une note

**En tant que** développeur,  
**Je veux** enregistrer une nouvelle note technique,  
**Afin de** documenter immédiatement une notion apprise.

**Endpoint :** `POST /api/notes`

**Critères d'acceptation :**
- Le titre, la technologie et le contenu sont obligatoires.
- Le type, la difficulté et le statut doivent respecter les valeurs autorisées.
- Les données invalides provoquent une réponse `400`.
- L'identifiant et les dates sont générés côté serveur.
- Une création réussie retourne `201`.
- La réponse contient l'objet créé dans `data`.

### US-102 — Consultation de toutes les notes

**En tant que** développeur,  
**Je veux** consulter toutes mes notes,  
**Afin de** revoir mon parcours d'apprentissage.

**Endpoint :** `GET /api/notes`

**Critères d'acceptation :**
- Retourner toutes les notes enregistrées.
- Retourner `200`, même si la collection est vide.
- Respecter le format JSON normalisé.

### US-103 — Consultation d'une note par identifiant

**En tant que** développeur,  
**Je veux** consulter une note précise grâce à son identifiant,  
**Afin de** lire son contenu complet.

**Endpoint :** `GET /api/notes/:id`

**Critères d'acceptation :**
- L'identifiant doit être un entier positif.
- Un identifiant invalide retourne `400`.
- Une note inexistante retourne `404`.
- Une note existante retourne `200` avec un objet unique dans `data`.

### US-104 — Modification d'une note

**En tant que** développeur,  
**Je veux** modifier une note existante,  
**Afin de** corriger ou compléter mes informations.

**Endpoint :** `PUT /api/notes/:id`

**Critères d'acceptation :**
- L'identifiant doit être un entier positif.
- La note doit exister.
- Les champs modifiables doivent être validés.
- Une modification invalide retourne `400`.
- Une note inexistante retourne `404`.
- `updatedAt` est actualisé après une modification réussie.
- Une modification réussie retourne `200` avec l'objet modifié.

**Convention :** `PUT` remplace la représentation complète de la note. Tous les champs modifiables doivent donc être fournis.

### US-105 — Suppression d'une note

**En tant que** développeur,  
**Je veux** supprimer une note grâce à son identifiant,  
**Afin de** nettoyer mon journal.

**Endpoint :** `DELETE /api/notes/:id`

**Critères d'acceptation :**
- L'identifiant doit être un entier positif.
- Un identifiant invalide retourne `400`.
- Une note inexistante retourne `404`.
- Une suppression réussie retourne `200` avec une confirmation.

---

## Thème 2 — Recherche et filtrage

### US-201 — Recherche textuelle

**En tant que** utilisateur,  
**Je veux** rechercher un mot-clé dans mes notes,  
**Afin de** retrouver rapidement une information technique.

**Endpoint :** `GET /api/notes?q=middleware`

**Critères d'acceptation :**
- La recherche porte sur le titre et le contenu.
- La recherche est insensible à la casse.
- Les espaces superflus sont ignorés.
- Une recherche sans résultat retourne `200` avec une collection vide.

### US-202 — Filtrage par technologie

**En tant que** utilisateur,  
**Je veux** filtrer mes notes par technologie,  
**Afin de** retrouver les informations liées à un environnement technique.

**Endpoint :** `GET /api/notes?technology=Node.js`

**Critères d'acceptation :**
- Le filtre utilise la technologie demandée.
- La comparaison est insensible à la casse.
- Aucun résultat retourne une collection vide.

### US-203 — Filtrage par statut

**En tant que** utilisateur,  
**Je veux** filtrer mes notes selon leur niveau de maîtrise,  
**Afin de** distinguer les notions maîtrisées de celles à revoir.

**Endpoint :** `GET /api/notes?status=to_review`

**Critères d'acceptation :**
- Les statuts acceptés sont `mastered` et `to_review`.
- Un statut invalide retourne `400`.

### US-204 — Combinaison des filtres

**En tant que** utilisateur,  
**Je veux** combiner recherche et filtres,  
**Afin de** préciser mes résultats.

**Exemple :** `GET /api/notes?q=express&technology=Node.js&status=to_review`

**Critères d'acceptation :**
- Les critères sont cumulés avec une logique ET.
- Seules les notes correspondant à tous les critères sont retournées.
- Les filtres peuvent être utilisés seuls ou combinés.

---

## Thème 3 — Interface utilisateur

### US-301 — Affichage dynamique des notes

**En tant que** utilisateur,  
**Je veux** voir mes notes sous forme de cartes,  
**Afin de** parcourir facilement mon journal.

**Critères d'acceptation :**
- Les données sont récupérées avec `fetch()`.
- Chaque note est affichée dynamiquement.
- Un état de chargement est visible pendant la requête.
- Une erreur réseau affiche un message compréhensible.
- Une collection vide affiche un état vide explicite.

### US-302 — Création d'une note depuis l'interface

**En tant que** utilisateur,  
**Je veux** remplir un formulaire de création,  
**Afin de** sauvegarder une nouvelle note sans utiliser directement l'API.

**Critères d'acceptation :**
- Le formulaire contient les champs définis dans le PRD.
- Les champs obligatoires sont contrôlés.
- La requête `POST` est envoyée à l'API.
- Le formulaire est réinitialisé après succès.
- La nouvelle note apparaît dans la liste.

### US-303 — Modification depuis l'interface

**En tant que** utilisateur,  
**Je veux** modifier une note depuis l'interface,  
**Afin de** mettre à jour son contenu.

**Critères d'acceptation :**
- L'utilisateur peut ouvrir le formulaire avec les valeurs existantes.
- Les données peuvent être modifiées.
- La requête `PUT` est envoyée à l'API.
- La carte est actualisée après succès.
- Les erreurs sont affichées à l'utilisateur.

### US-304 — Suppression depuis l'interface

**En tant que** utilisateur,  
**Je veux** supprimer une note depuis sa carte,  
**Afin de** retirer les informations obsolètes.

**Critères d'acceptation :**
- Une action de suppression est disponible sur chaque carte.
- Une confirmation est demandée avant suppression.
- La requête `DELETE` est envoyée à l'API.
- La carte disparaît après succès.

### US-305 — Recherche et filtrage depuis l'interface

**En tant que** utilisateur,  
**Je veux** utiliser les champs de recherche et de filtrage,  
**Afin de** retrouver mes notes sans parcourir toute la liste.

**Critères d'acceptation :**
- La recherche utilise le titre et le contenu.
- Le filtre technologie est disponible.
- Le filtre statut est disponible.
- Les filtres peuvent être combinés.
- Les résultats sont actualisés sans rechargement complet de la page.

---

## Thème 4 — Architecture et qualité

### US-401 — Organisation du backend

**En tant que** développeur,  
**Je veux** séparer routes, contrôleurs et accès aux données,  
**Afin de** maintenir un code organisé et évolutif.

**Critères d'acceptation :**
- Les routes sont déclarées dans un routeur dédié.
- Les contrôleurs gèrent les requêtes et réponses HTTP.
- La couche d'accès aux données gère le tableau en mémoire.
- Les routes ne contiennent pas directement les règles métier.

### US-402 — Validation des entrées

**En tant que** développeur,  
**Je veux** valider les données entrantes avec des middlewares,  
**Afin de** protéger l'application contre les données invalides.

**Critères d'acceptation :**
- Les données de création et de modification sont validées.
- Les identifiants sont contrôlés.
- Les paramètres de recherche et filtres sont vérifiés.
- Une erreur de validation retourne `400`.

### US-403 — Gestion centralisée des erreurs

**En tant que** développeur,  
**Je veux** centraliser la gestion des erreurs,  
**Afin de** garantir des réponses cohérentes.

**Critères d'acceptation :**
- Les routes inexistantes retournent `404`.
- Les erreurs inattendues sont prises en charge par un middleware global.
- Les détails internes ne sont pas exposés au client.
- Les erreurs sont journalisées côté serveur.

### US-404 — Documentation du projet

**En tant que** développeur,  
**Je veux** documenter l'installation et l'utilisation de DevJournal,  
**Afin de** permettre à une autre personne de lancer le projet.

**Critères d'acceptation :**
- Le README décrit les prérequis.
- Les instructions d'installation sont présentes.
- Les commandes de lancement sont documentées.
- Les endpoints sont présentés avec leurs méthodes et paramètres.
- La limite de persistance en mémoire est explicitement signalée.

---

## Ordre de réalisation recommandé

1. US-401 : Organisation du backend.
2. US-101 : Création.
3. US-102 et US-103 : Consultation.
4. US-104 et US-105 : Modification et suppression.
5. US-402 et US-403 : Validation et gestion des erreurs.
6. US-301 à US-304 : Interface et opérations CRUD.
7. US-201 à US-204 et US-305 : Recherche et filtres.
8. US-404 : Documentation et vérification finale.

