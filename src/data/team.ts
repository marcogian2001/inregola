export interface TeamMember {
  name: string;
  title: string;
  specialty: string;
  bio: string;
  photo: string;
  photoTransparent: string;
}

export const team: TeamMember[] = [
  {
    name: "Roberto Forte",
    title: "Dottore Commercialista",
    specialty: "Strategia aziendale, AI & Fiscalita crypto",
    bio: "Commercialista con 30 anni di esperienza specializzato nell'accompagnare PMI dalla gestione quotidiana alla guida strategica, integrando analisi finanziaria, consulenza del lavoro e strategia umanistica.",
    photo: "/team/roberto-forte.png",
    photoTransparent: "/team/roberto-forte-transparent.png",
  },
  {
    name: "Gianna Parlascino",
    title: "Consulente del Lavoro",
    specialty: "Diritto del lavoro & Gestione d'impresa",
    bio: "Consulente del Lavoro dal 2010. Esperienza consolidata nella consulenza giuslavoristica e nella gestione degli adempimenti fiscali e contabili connessi alla gestione d'impresa.",
    photo: "/team/gianna-parlascino.png",
    photoTransparent: "/team/gianna-parlascino-transparent.png",
  },
  {
    name: "Alessandro Squitieri",
    title: "Consulente del Lavoro",
    specialty: "Formazione & Innovazione professionale",
    bio: "Consulente del Lavoro che affianca all'attivita consulenziale tradizionale una forte attenzione alla formazione e all'evoluzione della professione, promuovendo un modello orientato al supporto strategico alle imprese.",
    photo: "/team/alessandro-squitieri.png",
    photoTransparent: "/team/alessandro-squitieri-transparent.png",
  },
  {
    name: "Brayan Milewski",
    title: "Dottore Tributarista",
    specialty: "Pianificazione fiscale & Gestione aziendale",
    bio: "Laureato in Economia, opera nel campo della consulenza fiscale e della gestione aziendale, affiancando professionisti ed imprese nella pianificazione fiscale e nella risoluzione delle problematiche tributarie.",
    photo: "/team/brayan-milewski.png",
    photoTransparent: "/team/brayan-milewski-transparent.png",
  },
];
