# Product Requirements Document (PRD) — DevJournal

**Version :** 1.1  
**Statut :** Prêt pour développement  
**Périmètre :** MVP — Sprint week-end

## 1. Présentation du produit

DevJournal est une application web personnelle destinée aux développeurs qui souhaitent organiser leurs apprentissages techniques, documenter les difficultés rencontrées et suivre leur progression.

L'application permet de créer, consulter, modifier, rechercher, filtrer et supprimer des notes techniques.

Une note peut représenter :
- Une notion apprise.
- Un bug rencontré.
- Une solution technique.
- Une astuce ou une commande utile.

## 2. Objectifs du projet

### 2.1 Objectifs fonctionnels

- Centraliser les notes d'apprentissage.
- Organiser les notes par technologie et par type.
- Retrouver rapidement une information technique.
- Suivre les notions maîtrisées et celles à revoir.
- Modifier ou supprimer une note.

### 2.2 Objectifs pédagogiques et techniques

**Frontend**
- HTML5 sémantique.
- CSS3, Flexbox, Grid et responsive design.
- Manipulation du DOM.
- Gestion des formulaires et événements.
- Recherche, filtrage et rendu dynamique.
- Consommation d'une API REST avec `fetch()`.

**Backend**
- Node.js et Express.
- Architecture organisée en routes, contrôleurs et couche d'accès aux données.
- Utilisation de `express.Router()`.
- Middlewares de journalisation, validation et gestion des erreurs.
- Opérations CRUD.
- Codes HTTP et réponses JSON cohérentes.

## 3. Utilisateur cible

Le MVP est destiné à un utilisateur unique : le développeur qui utilise personnellement son journal.

Aucun système de compte ou d'authentification n'est nécessaire pour ce sprint.

## 4. Modèle de données

Une note possède les propriétés suivantes :

| Propriété | Type | Règle |
|---|---|---|
| id | Number | Identifiant unique généré côté serveur |
| title | String | Obligatoire |
| technology | String | Obligatoire |
| type | String | concept, bug, solution ou tip |
| content | String | Obligatoire |
| difficulty | String | beginner, intermediate ou advanced |
| status | String | mastered ou to_review |
| createdAt | Date ISO | Généré côté serveur |
| updatedAt | Date ISO | Généré côté serveur |

Les valeurs `type`, `difficulty` et `status` doivent être contrôlées par le backend.

## 5. Fonctionnalités et priorisation MoSCoW

### Must Have — Indispensable au MVP

**Gestion des notes**
- Créer une note.
- Afficher toutes les notes.
- Consulter une note par son identifiant.
- Modifier une note.
- Supprimer une note.

**Expérience utilisateur**
- Afficher les notes sous forme de cartes.
- Proposer un formulaire de création et de modification.
- Rechercher dans le titre et le contenu.
- Filtrer par technologie et par statut.
- Afficher les états de chargement, d'erreur et de liste vide.

**Architecture backend**
- Séparation des routes, contrôleurs et accès aux données.
- Middleware de validation des entrées.
- Middleware de gestion des erreurs.
- Réponses JSON normalisées.

### Should Have — Important

- Filtrer par type de note.
- Combiner plusieurs filtres.
- Afficher des statistiques simples par technologie.
- Afficher les dates de création et de dernière modification.

### Could Have — Facultatif

- Tri par date de création.
- Tri par difficulté.
- Compteur de notes par statut.

### Won't Have — Hors périmètre du sprint

- Authentification et gestion multi-utilisateurs.
- PostgreSQL ou autre base de données.
- Persistance sur disque.
- Éditeur Markdown avancé.
- Déploiement en production.
- Synchronisation entre plusieurs appareils.

## 6. Règles de persistance

Pour le MVP, les notes sont stockées dans un tableau JavaScript côté serveur.

Conséquences :
- Les données sont disponibles tant que le serveur fonctionne.
- Un redémarrage du serveur réinitialise les données.
- Aucun stockage durable n'est garanti.

L'accès aux données doit être isolé dans une couche dédiée afin de faciliter une future migration vers PostgreSQL.

## 7. Règles fonctionnelles

- Chaque note possède un identifiant unique.
- Le titre, la technologie et le contenu sont obligatoires.
- Les valeurs contrôlées doivent appartenir aux listes autorisées.
- Une modification met à jour `updatedAt`.
- Une suppression concerne uniquement la note ciblée.
- Une recherche vide retourne toutes les notes correspondant aux autres filtres.
- La recherche textuelle est insensible à la casse et porte sur le titre et le contenu.
- Plusieurs filtres peuvent être appliqués simultanément.
- Une collection vide est une réponse valide, et non une erreur.

## 8. Exigences techniques

**Frontend :**
- HTML5.
- CSS3.
- JavaScript natif.
- `fetch()` pour communiquer avec l'API.

**Backend :**
- Node.js.
- Express.
- JavaScript avec ES Modules.
- API REST.
- Stockage temporaire en mémoire.

**Architecture attendue :**
- Routes.
- Contrôleurs.
- Couche d'accès aux données.
- Middlewares.
- Gestion centralisée des erreurs.

## 9. Critères de réussite du MVP

Le MVP est considéré comme terminé lorsque :

1. L'utilisateur peut créer une note valide.
2. Les notes enregistrées sont affichées depuis l'API.
3. L'utilisateur peut consulter une note précise.
4. L'utilisateur peut modifier une note.
5. L'utilisateur peut supprimer une note.
6. La recherche fonctionne sur le titre et le contenu.
7. Les filtres fonctionnent individuellement et ensemble.
8. Les erreurs de validation et les erreurs serveur sont correctement gérées.
9. L'interface fonctionne sur ordinateur et mobile.
10. Le README explique l'installation, le lancement et les endpoints.

