export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/saas", label: "SaaS" },
  { href: "/cybersecurite", label: "Cybersecurite" },
  { href: "/ia", label: "IA" },
  { href: "/clients", label: "Clients" },
  { href: "/projets", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export const homeStats = [
  { value: "15+", label: "produits et plateformes livres" },
  { value: "8", label: "pays servis en Afrique francophone" },
  { value: "24/7", label: "culture ops, securite et continuite" },
];

export const expertiseCards = [
  {
    title: "SaaS engineering",
    description:
      "Nous concevons des produits cloud-native, multi-tenant et API-first capables de supporter la croissance regionale.",
  },
  {
    title: "Cybersecurite",
    description:
      "Audit, pentesting, monitoring et hardening pour proteger les actifs critiques et les environnements cloud.",
  },
  {
    title: "Intelligence artificielle",
    description:
      "Nous integrons l'IA operationnelle dans les workflows metier, la relation client et la decision.",
  },
];

export const approachSteps = [
  { step: "01", title: "Cadrage", detail: "Vision, risques, budget et trajectoire produit." },
  { step: "02", title: "Architecture", detail: "Socle technique, securite et scalabilite." },
  { step: "03", title: "Execution", detail: "Delivery rapide avec priorites orientees impact." },
  { step: "04", title: "Fiabilisation", detail: "Qualite, observabilite et resilience." },
  { step: "05", title: "Mise en production", detail: "Vercel, Supabase et rituels ops." },
  { step: "06", title: "Acceleration", detail: "Support, optimisation et nouvelles releases." },
];

export const featuredProjects = [
  {
    title: "Plateforme SaaS analytics retail",
    description: "Business intelligence temps reel pour reseaux de distribution multi-sites.",
    tags: ["SaaS", "Analytics", "Dashboards"],
  },
  {
    title: "SOC pour institution financiere",
    description: "Detection, monitoring et reponse aux incidents pour environnements sensibles.",
    tags: ["Cybersecurite", "SOC", "Compliance"],
  },
  {
    title: "Assistant IA multilingue",
    description: "Automatisation du support client en francais, anglais et langues locales.",
    tags: ["IA", "NLP", "Support"],
  },
];

/** Bloc « Ils nous font confiance » — secteurs réalistes (sans noms clients fictifs type CLIENT 1) */
export const trustPartners = [
  {
    id: "finance",
    initials: "FI",
    name: "Finance & assurance",
    segment: "Banques, assureurs et acteurs réglementés",
  },
  {
    id: "retail",
    initials: "RD",
    name: "Retail & distribution",
    segment: "Enseignes nationales et réseaux multi-sites",
  },
  {
    id: "public",
    initials: "PS",
    name: "Public & santé",
    segment: "Institutions et opérateurs de services essentiels",
  },
  {
    id: "telco",
    initials: "TC",
    name: "Télécoms & infra",
    segment: "Opérateurs et infrastructures critiques",
  },
  {
    id: "scaleup",
    initials: "SU",
    name: "Scale-ups & industrie",
    segment: "Fintech, logistique et production",
  },
] as const;

/** Sections plein écran avec image futuriste et effet parallaxe (sticky + scroll) */
export type ParallaxRevealBlock = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  /** CSS object-position, ex. "center 30%" */
  imagePosition?: string;
};

export const parallaxRevealBlocks: ParallaxRevealBlock[] = [
  {
    id: "horizon",
    imageUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Visual futuriste : hologrammes et cyberdéfense",
    eyebrow: "Horizon",
    title: "Ingénierie alignée sur la donnée, la vitesse et la confiance",
    description:
      "Au fil du défilement, la scène se dévoile : plateformes résilientes, sécurité intégrée dès la conception, et produits qui tiennent la charge réelle — pas seulement en démo.",
    imagePosition: "center 42%",
  },
  {
    id: "signal",
    imageUrl:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2400&q=85",
    imageAlt: "Sphère et géométrie 3D futuriste",
    eyebrow: "Signal",
    title: "Quand l’infrastructure devient un avantage compétitif",
    description:
      "Observabilité, automatisation et garde-fous : le socle technique ne se contente plus de tourner — il anticipe, s’adapte et reste lisible pour les équipes.",
    imagePosition: "center",
  },
];

export const caseStudies = [
  {
    title: "Plateforme SaaS pour le retail",
    context:
      "Centralisation des donnees, reporting unifie et pilotage temps reel pour une chaine de distribution.",
    result: "70% de reduction du temps de reporting et un pilotage multi-site plus fiable.",
    metrics: ["70% temps reporting", "50+ utilisateurs actifs"],
    tags: ["SaaS", "Analytics", "Operations"],
  },
  {
    title: "SOC pour institution financiere",
    context:
      "Mise en place d'un centre de securite operationnelle avec supervision continue et workflows d'alerte.",
    result: "Visibilite 24/7, posture de securite renforcee et reduction des temps de reaction.",
    metrics: ["24/7 monitoring", "99.9% disponibilite"],
    tags: ["SOC", "Cyber", "SIEM"],
  },
  {
    title: "Chatbot IA multilingue",
    context:
      "Assistant conversationnel destine a absorber les demandes recurrentes et accelerer le support.",
    result: "40% de reduction des tickets de support et meilleure satisfaction client.",
    metrics: ["40% de tickets en moins", "3 langues supportees"],
    tags: ["IA", "NLP", "CX"],
  },
];

export const portfolioProjects = [
  {
    category: "SaaS",
    title: "Plateforme analytics retail",
    description: "Business intelligence et automatisation de reporting pour enseignes distribuees.",
  },
  {
    category: "Cybersecurite",
    title: "SOC institution financiere",
    description: "Supervision 24/7, detection et qualification des incidents.",
  },
  {
    category: "IA",
    title: "Chatbot support client",
    description: "Assistant intelligent multilingue pour des parcours de support fluides.",
  },
  {
    category: "Mobile",
    title: "App sante et telemedecine",
    description: "Suivi patients, rendez-vous et coordination praticiens.",
  },
  {
    category: "SaaS",
    title: "Marketplace B2B",
    description: "Plateforme transactionnelle pour acheteurs, vendeurs et equipes operations.",
  },
  {
    category: "IA",
    title: "Vision industrielle",
    description: "Detection visuelle et classification d'images en contexte terrain.",
  },
];

export const offerPages = {
  saas: {
    eyebrow: "Scalable software architecture",
    title: "Concevoir des produits SaaS capables de passer a l'echelle.",
    description:
      "Architecture cloud-native, experience produit, delivery rapide et observabilite des systemes.",
    highlights: [
      "Solutions SaaS sur mesure et API-first",
      "Architecture multi-tenant et securisee",
      "Dashboards, analytics et workflows back-office",
      "Go-to-market technique sur Vercel et Supabase",
    ],
  },
  cyber: {
    eyebrow: "Securing digital infrastructure",
    title: "Renforcer la resilience des environnements critiques.",
    description:
      "Nous structurons la securite applicative, cloud et operationnelle pour reduire les risques concrets.",
    highlights: [
      "Audit de posture de securite",
      "Pentest et securite applicative",
      "SOC monitoring et runbooks incidents",
      "Cloud hardening et conformite",
    ],
  },
  ai: {
    eyebrow: "AI for smart systems",
    title: "Passer de l'experimentation IA a des workflows utiles.",
    description:
      "Automatisation, NLP, vision et analytics pour creer un effet business reel et mesurable.",
    highlights: [
      "Automatisation intelligente",
      "Assistants conversationnels",
      "Modeles predictifs et recommandations",
      "Vision AI et enrichissement des operations",
    ],
  },
};

export const contactDetails = {
  email: "contact@fasodigital.com",
  phones: ["+212 771 668 079", "+226 64 71 20 44"],
  address: "Casablanca, Maroc",
  responseTime: "Reponse sous 24h",
};

export const footerLinks = {
  company: [
    { href: "/", label: "À propos" },
    { href: "/projets", label: "Projets" },
    { href: "/clients", label: "Clients" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/saas", label: "SaaS" },
    { href: "/cybersecurite", label: "Cybersécurité" },
    { href: "/ia", label: "Intelligence artificielle" },
  ],
};

