# Cahier des charges - FASODIGITAL TECHNOLOGIES

## Objectif

Refondre totalement le site corporate existant en une application moderne basee sur Next.js, avec une architecture propre, deployable sur Vercel, alimentee par Supabase pour les donnees simples de contact, et un systeme UI coherent inspire de shadcn/ui.

## Nouveau stack technique

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Supabase
- Vercel

## Positionnement produit

Le site doit presenter FASODIGITAL comme un partenaire premium de transformation digitale pour l'Afrique, avec trois piliers de valeur :

- SaaS engineering
- Cybersecurite
- Intelligence artificielle

## Pages obligatoires

- `/` : page d'accueil corporate premium
- `/saas` : offre SaaS
- `/cybersecurite` : offre cybersecurite
- `/ia` : offre intelligence artificielle
- `/clients` : cas clients
- `/projets` : portfolio / projets
- `/contact` : formulaire de contact relie a Supabase

## Exigences UX/UI

- Identite visuelle plus premium que l'ancien site
- Responsive mobile, tablette et desktop
- Animations utiles avec Framer Motion
- Sections reutilisables et modulaires
- Navigation claire avec CTA visibles
- Composants UI homogenes et extensibles

## Exigences de contenu

- Reprendre le contenu metier existant et le reformuler dans une presentation plus moderne
- Conserver la structure business actuelle : hero, expertises, approche, projets, clients, CTA
- Ajouter des micro-textes plus credibles pour une agence / studio tech premium

## Exigences techniques

- Architecture modulaire dans `src/`
- Donnees marketing centralisees dans des fichiers de contenu
- Composants UI reutilisables
- Formulaire de contact valide cote serveur
- Insertion des leads dans Supabase
- Variables d'environnement documentees
- Projet pret pour un deployement Vercel

## Supabase

Le projet doit preparer :

- un client Supabase cote serveur
- un schema SQL de base pour une table `contact_requests`
- une integration du formulaire de contact qui enregistre les demandes

## Livrables attendus maintenant

- remplacement du projet Django par une app Next.js
- creation de la structure initiale de production
- migration des pages principales
- preparation des composants UI de base
- mise en place de la base Tailwind + shadcn/ui
- documentation de lancement et de deploiement

## Definition de termine

Le projet est considere comme correctement initialise si :

- l'ancien projet n'est plus le point d'entree
- la nouvelle app Next.js contient toutes les pages strategiques
- le design system de base est en place
- le formulaire de contact est branche sur Supabase
- le repo est pret a etre installe puis deploye sur Vercel
