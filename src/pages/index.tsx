import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

export default function Home() {
  const values = [
    {
      id: "excellence",
      title: "Excellence Sportive",
      keywords: ["1er club français", "Médailles Paris 2024", "8 athlètes élite"],
      imageUrl: "/excellence-sportive.jpg",
      details: "Médaille d'argent par équipe aux Jeux Olympiques de Paris 2024 avec Baptiste Addis (17 ans, plus jeune médaillé olympique français), Jean-Charles Valladont (médaillé argent Rio 2016) et Thomas Chirault.\n\n8 athlètes (4 féminins + 4 masculins) en préparation pour Los Angeles 2028.\n\nRégularité au plus haut niveau international : Championnats du Monde, d'Europe, Coupes du Monde et Indoor World Series.",
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
      ]
    },
    {
      id: "rayonnement",
      title: "Rayonnement International",
      keywords: ["2ème tournoi au monde", "1355 participants", "50 nations"],
      imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Organisation depuis 1997 d'un tournoi international Indoor au Parnasse de Nîmes.\n\nAujourd'hui le 2ème plus important au monde après Las Vegas.\n\nFait partie du circuit mondial prestigieux Indoor World Series qui compte 7 tournois majeurs (Lausanne, Taipei, Luxembourg, Rio de Janeiro, Nîmes, Mérida, Las Vegas).",
      gallery: [
        {
          type: "image",
          src: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          title: "Tournoi Indoor Nîmes 2026",
          description: "1355 participants de 50 nations"
        }
      ]
    },
    {
      id: "economie",
      title: "Impact Économique",
      keywords: ["2ème événement nîmois", "Hôtellerie", "Restauration & Services"],
      imageUrl: "https://images.unsplash.com/photo-1542861214-36762c4bd675?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Au-delà de l'aspect sportif, l'Arc Club de Nîmes est un acteur économique majeur pour la ville.\n\nNotre tournoi international est le deuxième événement de la ville de Nîmes après la Féria en termes de retombées économiques directes.\n\nIl génère une activité essentielle en plein mois de janvier pour les domaines de l'hôtellerie, de la restauration et des services locaux.",
      gallery: []
    },
    {
      id: "parite",
      title: "Parité & Inclusion",
      keywords: ["Équipe mixte 50/50", "Para Archerie", "Solidarité internationale"],
      imageUrl: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "Un engagement fort pour l'égalité : notre collectif pour Los Angeles 2028 est parfaitement paritaire (4 femmes, 4 hommes) et nos athlètes féminines, comme Victoria Sebastian (récente victoire en or en Coupe du Monde), brillent au plus haut niveau.\n\nNous soutenons activement la Para Archerie et la pratique pour les seniors.\n\nNotre solidarité dépasse les frontières : nous entraînons et accompagnons deux athlètes de l'équipe nationale de Côte d'Ivoire vers les JO 2028.",
      gallery: []
    },
    {
      id: "territoire",
      title: "Engagement Territorial",
      keywords: ["Programme dans 9 écoles", "Formation jeunesse", "Sport pour tous"],
      imageUrl: "https://images.unsplash.com/photo-1473662284951-c31bc9eb72c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      details: "L'Arc Club de Nîmes grandit avec sa ville et s'investit pour sa jeunesse.\n\nNous réalisons et finançons entièrement un programme d'éducation sportive déployé dans 9 écoles de la ville de Nîmes.\n\nDe la découverte scolaire jusqu'au podium olympique, nous défendons une vision du sport accessible à tous, formatrice et inclusive, transmettant les valeurs de concentration, de respect et de maîtrise de soi.",
      gallery: []
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