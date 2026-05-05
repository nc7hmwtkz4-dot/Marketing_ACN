import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection } from "@/components/ValueSection";
import type { GalleryItem } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

export default function Home() {
  const impactGallery: GalleryItem[] = [];
  const territorialGallery: GalleryItem[] = [];

  return (
    <>
      <SEO
        title="Arc Club de Nîmes - Nos Valeurs"
        description="Découvrez les 5 valeurs de l'Arc Club de Nîmes : Excellence sportive, Rayonnement international, Impact économique, Parité & inclusion, Engagement territorial"
        image="/og-image.png"
      />
      <Header />
      <main>
        <ValueSection
          index={0}
          id="excellence"
          title="Excellence Sportive"
          keywords={["8 Titres de Champions de France", "3 Olympiens", "Médailles Européennes"]}
          image="/excellence-sportive.jpg"
          details="L'Arc Club de Nîmes incarne l'excellence au plus haut niveau avec 8 titres de Champions de France et une présence régulière sur le podium des compétitions nationales et internationales. Notre club a formé 3 Olympiens qui ont porté les couleurs de la France aux Jeux Olympiques, témoignant de notre engagement dans la formation d'athlètes d'élite.

Notre centre de formation reconnu développe les talents de demain grâce à des infrastructures de pointe et un encadrement professionnel. Nos archers collectionnent les médailles aux championnats européens et mondiaux, plaçant Nîmes sur la carte internationale du tir à l'arc.

L'excellence sportive se construit au quotidien à travers un programme d'entraînement rigoureux, un suivi personnalisé des athlètes et une culture de la performance partagée par tous nos membres."
          gallery={[]}
        />

        <ValueSection
          index={1}
          id="rayonnement"
          title="Rayonnement International"
          keywords={["Tournoi Nîmes Archery Trophy", "40 Nations", "500 Archers d'Élite"]}
          image="/rayonnement-international.jpg"
          details="Le Nîmes Archery Trophy est devenu un rendez-vous incontournable du calendrier mondial du tir à l'arc. Chaque année, notre tournoi accueille plus de 500 archers venus de 40 nations différentes, faisant de Nîmes un centre névralgique du tir à l'arc international.

Cet événement de renommée mondiale diffuse l'image de Nîmes et de sa région à travers les cinq continents. Les retransmissions en direct touchent des millions de spectateurs, plaçant notre ville sous les projecteurs de la scène sportive internationale.

Au-delà de la compétition, le Nîmes Archery Trophy crée des ponts culturels et sportifs entre les nations, renforçant les valeurs de fair-play et d'excellence qui animent notre discipline. C'est aussi une vitrine exceptionnelle pour le patrimoine et la gastronomie de notre territoire."
          gallery={[]}
        />

        <ValueSection
          index={2}
          id="impact"
          title="Impact Économique"
          keywords={["Hôtellerie", "Restauration", "Commerce Local", "Tourisme Sportif"]}
          image="/CyrilTONDUT066.jpg"
          details="L'Arc Club de Nîmes génère un impact économique significatif sur le territoire. Le tournoi Nîmes Archery Trophy 2026 devrait générer 2 millions d'euros de retombées économiques directes, avec 2 350 visiteurs séjournant en moyenne 3,5 jours dans la région.

L'événement bénéficie directement aux acteurs économiques locaux : hôtellerie (750 nuitées), restauration (plus de 15 000 repas), commerces et services. Au-delà du tournoi annuel, l'activité régulière du club génère environ 400 000€ d'impact économique indirect par an.

Le tir à l'arc contribue ainsi au dynamisme économique de Nîmes tout en renforçant son attractivité touristique. Notre club est un acteur économique à part entière, créateur d'emplois et générateur de richesse pour le territoire."
          gallery={impactGallery}
        />

        <ValueSection
          index={3}
          id="parite"
          title="Parité & Inclusion"
          keywords={["50% de Femmes en Compétition", "Accessibilité Handicap", "Mixité Sociale"]}
          image="/devenez-partenaire.jpg"
          details="L'Arc Club de Nîmes est pionnier en matière de parité et d'inclusion dans le sport de haut niveau. Avec 50% de femmes en compétition, notre club démontre que l'excellence sportive n'a pas de genre. Nos athlètes féminines brillent aux plus hauts niveaux de la compétition internationale.

Nous avons développé une section handisport reconnue qui permet à tous de pratiquer le tir à l'arc dans les meilleures conditions. Nos infrastructures sont entièrement accessibles et notre encadrement formé à l'accompagnement de tous les publics.

La mixité sociale est au cœur de notre projet. Grâce à nos partenariats avec les collectivités, nous proposons des tarifs adaptés et des bourses pour rendre le tir à l'arc accessible à tous, indépendamment du milieu socio-économique. Le sport doit être un vecteur d'égalité des chances."
          gallery={[]}
        />

        <ValueSection
          index={4}
          id="territorial"
          title="Engagement Territorial"
          keywords={["650 Jeunes Formés", "25 Établissements Partenaires", "Actions Citoyennes"]}
          image="/devenez-partenaire.jpg"
          details="L'Arc Club de Nîmes s'engage quotidiennement auprès de la jeunesse avec plus de 650 jeunes formés chaque année dans nos programmes de développement. Nous intervenons dans 25 établissements scolaires de la région pour initier les élèves au tir à l'arc et transmettre les valeurs du sport.

Notre club mène de nombreuses actions citoyennes : interventions dans les quartiers prioritaires, partenariat avec les centres sociaux, actions de prévention et d'éducation par le sport. Nous croyons au pouvoir du sport comme outil d'intégration et de cohésion sociale.

L'engagement territorial, c'est aussi notre participation active à la vie locale : événements municipaux, fête du sport, forums des associations. Notre club est un acteur à part entière du tissu associatif nîmois, contribuant au dynamisme et à l'attractivité de notre territoire."
          gallery={territorialGallery}
        />

        <CTASection />
      </main>
      <ScrollNavigation sections={[
        { id: "excellence", label: "Excellence Sportive" },
        { id: "rayonnement", label: "Rayonnement" },
        { id: "impact", label: "Impact Économique" },
        { id: "parite", label: "Parité & Inclusion" },
        { id: "territorial", label: "Engagement" },
        { id: "contact", label: "Contact" }
      ]} />
    </>
  );
}