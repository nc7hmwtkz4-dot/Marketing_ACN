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
      keywords: ["1er club français", "Top 10 mondial", "100 podiums nationaux"],
      imageUrl: "/excellence-sportive.jpg",
      details: "L'Arc Club de Nîmes incarne l'excellence sportive au plus haut niveau national et international.\n\nNous sommes le premier club français de tir à l'arc, avec un palmarès exceptionnel :\n• Plus de 100 podiums en championnats de France toutes catégories\n• Classement régulier dans le Top 10 des clubs mondiaux\n• Formation de champions olympiques et mondiaux\n• Centre d'entraînement reconnu par la Fédération Française de Tir à l'Arc\n\nNotre approche combine excellence technique, suivi personnalisé et infrastructure de premier plan pour permettre à nos athlètes d'atteindre leur plein potentiel.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "rayonnement",
      title: "Rayonnement International",
      keywords: ["48 nations", "1350 athlètes", "30 ans d'histoire"],
      imageUrl: "/rayonnement-international.jpg",
      details: "Notre tournoi international indoor est devenu une référence mondiale dans le calendrier du tir à l'arc.\n\nChiffres clés de notre rayonnement :\n• 48 nations représentées chaque année\n• 1350 athlètes internationaux participants\n• 30 années d'organisation sans interruption\n• Retransmission en direct sur les chaînes internationales\n\nCe tournoi positionne Nîmes comme une capitale mondiale du tir à l'arc et offre une visibilité exceptionnelle à nos partenaires sur la scène internationale.\n\nLes meilleurs archers du monde considèrent notre tournoi comme un passage obligé de la saison indoor.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "formation",
      title: "Formation & Jeunesse",
      keywords: ["300 licenciés", "École de tir", "Détection talents"],
      imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "La formation des jeunes talents est au cœur de notre mission et de notre identité.\n\nNotre école de tir à l'arc :\n• 300 licenciés dont 60% de jeunes de moins de 18 ans\n• Encadrement par des entraîneurs diplômés d'État\n• Parcours d'excellence de la découverte au haut niveau\n• Partenariats avec les établissements scolaires locaux\n• Programme de détection et suivi individualisé des talents\n\nNous formons les champions de demain tout en transmettant les valeurs essentielles du sport : discipline, concentration, respect et dépassement de soi.",
      gallery: [] as GalleryItem[]
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
      id: "valeurs",
      title: "Nos Valeurs",
      keywords: ["Passion", "Excellence", "Partage"],
      imageUrl: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Les valeurs qui nous animent et nous définissent au quotidien.\n\nPassion :\nL'amour du tir à l'arc guide chacune de nos actions. C'est cette passion qui nous pousse à viser toujours plus haut et à transmettre notre discipline aux nouvelles générations.\n\nExcellence :\nNous cultivons l'excellence dans tous les aspects de notre activité : performance sportive, qualité de l'enseignement, organisation d'événements et accueil de nos partenaires.\n\nPartage :\nNous croyons au pouvoir du sport comme vecteur de lien social. Notre club est un lieu de rencontre, d'échange et de transmission entre générations et cultures.",
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