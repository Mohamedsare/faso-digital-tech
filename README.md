# FASODIGITAL TECHNOLOGIES

Refonte complete du site corporate vers `Next.js + Tailwind CSS + shadcn/ui + Framer Motion + Supabase`, avec une cible de deploiement Vercel.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui compatible
- Framer Motion
- Supabase
- Vercel

## Lancement

```bash
npm install
npm run dev
```

Application locale : `http://localhost:3000`

## Variables d'environnement

Copier `.env.example` vers `.env.local` puis renseigner :

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Supabase

Le schema SQL initial est dans `supabase/schema.sql`.

Le formulaire de contact attend une table `contact_requests`.

## Deploiement

Le projet est pret pour Vercel :

```bash
npm run build
```

Configurer les variables d'environnement dans Vercel avant le premier deployement.

