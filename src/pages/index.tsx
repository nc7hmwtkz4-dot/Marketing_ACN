import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection, type GalleryItem } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

export default function Home() {
  const values = [
    {
      id: "excellence",
      title: "Excellence Sportive",
      keywords: ["1er club français", "Médailles Paris 2024", "4 athlètes top 40 mondial"],
      imageUrl: "/excellence-sportive.jpg",
      details: "Médaille d'argent par équipe aux Jeux Olympiques de Paris 2024 avec Baptiste Addis (n°7 mondial, 17 ans, plus jeune médaillé olympique français), Jean-Charles Valladont (n°36 mondial, médaillé argent Rio 2016) et Thomas Chirault.\n\n8 athlètes (4 féminins + 4 masculins) en préparation pour Los Angeles 2028.\n\nVictoria Sebastian : n°10 mondiale, vainqueur du Taipei Open en décembre 2025, médaillée de bronze à Nîmes et d'argent à Las Vegas en 2025.\n\nAnaëlle Florent : 24 ans, vise Los Angeles 2028 en arc à poulies après plusieurs sélections en équipe nationale.\n\nRégularité au plus haut niveau international : Championnats du Monde, d'Europe, Coupes du Monde et Indoor World Series.",
      gallery: [
        {
          type: "image",
          src: "/excellence-sportive.jpg",
          title: "Podium Paris 2024",
          description: "Médaille d'argent par équipe - Addis, Valladont, Chirault"
        },
        {
          type: "article",
          src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          title: "L'Équipe - Les flèches d'argent",
          description: "Couverture médiatique Paris 2024"
        },
        {
          type: "article",
          src: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          title: "Midi Libre - Dans la cour des grands",
          description: "Portrait des champions nîmois"
        }
      ] as GalleryItem[]
    },
    {
      id: "rayonnement",
      title: "Rayonnement International",
      keywords: ["Plus grand tournoi Indoor d'Europe", "1350 athlètes", "48 nations"],
      imageUrl: "/rayonnement-international.jpg",
      details: "Le Occitanie Nîmes Archery Tournament, 28ème édition en 2026, est le plus grand tournoi de tir à l'arc en salle d'Europe.\n\n1350 athlètes de 48 nations et 5 continents réunis pour 3 jours de compétition (16-18 janvier 2026).\n\n5ème étape de la prestigieuse Indoor World Series (IWS), aux côtés de Lausanne, Luxembourg, Taipei, Rio de Janeiro, Mérida et Las Vegas.\n\nFinales diffusées en direct dans le monde entier avec scores en temps réel.\n\nPrésence confirmée de Brady Ellison (n°1 mondial, USA), Penny Healey (GBR), et tous les médaillés olympiques de Paris 2024.\n\nTrois sites de compétition : Palais des Sports - Le Parnasse, Parc des Expositions, L'Estanque.",
      gallery: [
        {
          type: "image",
          src: "/rayonnement-international.jpg",
          title: "Tournoi Indoor Nîmes 2026",
          description: "1350 participants de 48 nations - Vue du Parnasse"
        }
      ] as GalleryItem[]
    },
    {
      id: "economie",
      title: "Impact Économique",
      keywords: ["2ème événement nîmois", "1,6M€ de retombées", "2350 visiteurs"],
      imageUrl: "https://images.unsplash.com/photo-1542861214-36762c4bd675?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Au-delà de l'aspect sportif, l'Arc Club de Nîmes est un acteur économique majeur pour la ville.\n\nImpact économique direct du tournoi 2026 :\n• 2350 participants (athlètes + accompagnants)\n• Dépense moyenne : 200€ par personne et par jour\n• Séjour moyen : 3,5 jours\n• Retombées économiques directes : 1 645 000€\n\nImpact économique indirect annuel :\n• Embauche de salariés permanents\n• Achats d'équipement et de matériel sportif\n• Prestations de services dans les commerces locaux\n• Investissements pour le fonctionnement du club\n• Retombées indirectes estimées : 400 000€ par an\n\nNotre tournoi international est le deuxième événement de la ville de Nîmes après la Féria en termes de retombées économiques.\n\nIl génère une activité essentielle en plein mois de janvier (hors saison touristique) pour les domaines de l'hôtellerie, de la restauration et des services locaux.\n\nPrès de 30 ans d'existence, une référence mondiale qui attire les meilleurs archers internationaux qui apprécient la qualité de l'organisation et l'expérience unique du tournoi tricolore.\n\nAprès une année record en 2025 avec 1238 archers participants, le tournoi poursuit sa croissance.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "parite",
      title: "Parité & Inclusion",
      keywords: ["Équipe mixte 50/50", "Para Archerie", "Solidarité internationale"],
      imageUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Un engagement fort pour l'égalité : notre collectif pour Los Angeles 2028 est parfaitement paritaire (4 femmes, 4 hommes) et nos athlètes féminines brillent au plus haut niveau.\n\nVictoria Sebastian (n°10 mondiale) : vainqueur du Taipei Open en décembre 2025, médaillée de bronze à Nîmes et d'argent à Las Vegas.\n\nAnaëlle Florent : après plusieurs sélections en équipe nationale, elle vise désormais Los Angeles 2028 en arc à poulies.\n\nNous soutenons activement la Para Archerie et la pratique pour les seniors.\n\nNotre solidarité dépasse les frontières : nous entraînons et accompagnons deux athlètes de l'équipe nationale de Côte d'Ivoire vers les JO 2028.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "territoire",
      title: "Engagement Territorial",
      keywords: ["Programme dans 9 écoles", "Formation jeunesse", "Sport pour tous"],
      imageUrl: "https://images.unsplash.com/photo-1473662284951-c31bc9eb72c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "L'Arc Club de Nîmes grandit avec sa ville et s'investit pour sa jeunesse.\n\nNous réalisons et finançons entièrement un programme d'éducation sportive déployé dans 9 écoles de la ville de Nîmes.\n\nDe la découverte scolaire jusqu'au podium olympique, nous défendons une vision du sport accessible à tous, formatrice et inclusive, transmettant les valeurs de concentration, de respect et de maîtrise de soi.\n\nNîmes, capitale mondiale du tir à l'arc pour trois jours en janvier, accueille l'élite mondiale et inspire la prochaine génération d'archers.",
      gallery: [] as GalleryItem[]
    }
  ];

  return (
    <>
      <SEO 
        title="Arc Club de Nîmes | Dossier Partenariat"
        description="Découvrez les 5 valeurs qui font de l'Arc Club de Nîmes le 1er club de tir à l'arc de France. Rejoignez notre aventure sportive, économique et humaine."
      />
      <Header />
      <main className="snap-y snap-mandatory h-screen overflow-y-auto">
        {values.map((value, index) => (
          <ValueSection
            key={index}
            index={index}
            id={value.id}
            title={value.title}
            keywords={value.keywords}
            image={value.imageUrl}
            details={value.details}
            gallery={value.gallery}
          />
        ))}
        <CTASection />
      </main>
      <ScrollNavigation totalSections={values.length + 1} />
    </>
  );
}