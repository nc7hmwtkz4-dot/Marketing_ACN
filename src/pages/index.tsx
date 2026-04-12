import type { ReactElement } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection, type GalleryItem } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

export default function Home(): ReactElement {
  const values = [
    {
      id: "excellence",
      title: "Excellence Sportive",
      keywords: ["1er club français", "Top 10 mondial", "100 podiums nationaux"],
      imageUrl: "/excellence-sportive.jpg",
      details: "L'Arc Club de Nîmes incarne l'excellence sportive au plus haut niveau national et international.\n\nNous sommes le premier club français de tir à l'arc, avec un palmarès exceptionnel :\n• Plus de 100 podiums en championnats de France toutes catégories\n• Athlètes classés régulièrement dans le Top 10 mondial\n• Formation de champions olympiques et mondiaux\n• Centre d'entraînement reconnu par la Fédération Française de Tir à l'Arc\n\nSÉLECTIONS OLYMPIQUES :\n• Séverine Bonal (1992, 1996)\n• Aurore Trayan (2004)\n• Jean-Charles Valladont (2008, 2016, 2020, 2024)\n• Pierre Jagnäs (2016, 2020)\n• Addis (2024)\n\nCLASSEMENTS MONDIAUX :\n• Jean-Charles Valladont — N°1 mondial en 2017\n• Pierre Jagnäs — N°5 mondial en 2014\n• Addis — N°6 mondial en 2026\n• Sebastian — N°7 mondial en 2025\n• Aubert — N°10 mondial en 2013\n\nNotre approche combine excellence technique, suivi personnalisé et infrastructure de premier plan pour permettre à nos athlètes d'atteindre leur plein potentiel.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "rayonnement",
      title: "Rayonnement International",
      keywords: ["50 nations", "1350 athlètes", "30 ans d'histoire"],
      imageUrl: "/rayonnement-international.jpg",
      details: "Notre tournoi international indoor est devenu une référence mondiale dans le calendrier du tir à l'arc.\n\nChiffres clés de notre rayonnement :\n• 50 nations représentées chaque année\n• 1350 athlètes internationaux participants\n• 30 années d'organisation sans interruption, dont deux championnats du Monde en 2003 et 2014\n• Retransmission en direct sur les chaînes internationales\n\nCe tournoi positionne Nîmes comme une capitale mondiale du tir à l'arc et offre une visibilité exceptionnelle à nos partenaires sur la scène internationale.\n\nLes meilleurs archers du monde considèrent notre tournoi comme un passage obligé du circuit international indoor, parmi Lausanne (SUI), Luxembourg (LUX), Taipei (TPE), Rio de Janeiro (BRA), Mérida (MEX), Las Vegas (USA).",
      gallery: [] as GalleryItem[]
    },
    {
      id: "parite",
      title: "Parité & Inclusion",
      keywords: ["Éducative", "Inclusion et parité", "Sport pour tous"],
      imageUrl: "https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "L'Arc Club de Nîmes s'engage pour un sport accessible et inclusif.\n\nNotre approche de la parité et de l'inclusion :\n• Équipe mixte avec 50% de femmes et 50% d'hommes\n• Section Para Archerie dédiée aux athlètes en situation de handicap\n• Programmes de solidarité internationale pour promouvoir le tir à l'arc dans le monde\n• Accueil et accompagnement de tous les profils, sans discrimination\n• Formation d'entraîneurs sensibilisés aux problématiques d'inclusion\n\nNous croyons que le tir à l'arc doit être accessible à tous, quels que soient le genre, l'âge, l'origine ou les capacités physiques. Notre club est un lieu d'ouverture et de diversité.",
      gallery: [] as GalleryItem[]
    },
    {
      id: "economie",
      title: "Impact Économique",
      keywords: ["2ème événement nîmois", "1,6M€ de retombées", "2350 visiteurs"],
      imageUrl: "https://images.unsplash.com/photo-1542861214-36762c4bd675?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Au-delà de l'aspect sportif, l'Arc Club de Nîmes est un acteur économique majeur pour la ville.\n\nImpact économique direct du tournoi 2026 :\n• 2350 participants (athlètes + accompagnants)\n• Dépense moyenne : 200€ par personne et par jour\n• Séjour moyen : 3,5 jours\n• Retombées économiques directes : 1 645 000€\n\nImpact économique indirect annuel :\n• Embauche de salariés permanents\n• Achats d'équipement et de matériel sportif\n• Prestations de services dans les commerces locaux\n• Investissements pour le fonctionnement du club\n• Retombées indirectes estimées : 400 000€ par an\n\nNotre tournoi international est le deuxième événement de la ville de Nîmes après la Féria en termes de retombées économiques.\n\nIl génère une activité essentielle en plein mois de janvier (hors saison touristique) pour les domaines de l'hôtellerie, de la restauration et des services locaux.\n\nPrès de 30 ans d'existence, une référence mondiale qui attire les meilleurs archers internationaux qui apprécient la qualité de l'organisation et l'expérience unique du tournoi tricolore.\n\nAprès une année record en 2025 avec 1238 archers participants, le tournoi poursuit sa croissance.",
      gallery: []
    },
    {
      id: "valeurs",
      title: "Nos Valeurs",
      keywords: ["Passion", "Excellence", "Partage"],
      imageUrl: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Les valeurs qui nous animent et nous définissent au quotidien.\n\nPassion :\nL'amour du tir à l'arc guide chacune de nos actions. C'est cette passion qui nous pousse à viser toujours plus haut et à transmettre notre discipline aux nouvelles générations.\n\nExcellence :\nNous cultivons l'excellence dans tous les aspects de notre activité : performance sportive, qualité de l'enseignement, organisation d'événements et accueil de nos partenaires.\n\nPartage :\nNous croyons au pouvoir du sport comme vecteur de lien social. Notre club est un lieu de rencontre, d'échange et de transmission entre générations et cultures.",
      gallery: []
    }
  ];

  return (
    <>
      <SEO />
      <Header />
      <main className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
        {values.map((value, index) => (
          <ValueSection
            key={value.id}
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
      <ScrollNavigation sections={values} />
    </>
  );
}