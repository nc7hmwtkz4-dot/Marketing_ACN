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
      image: "/excellence-sportive.jpg",
      details: `Médaille d'argent par équipe aux Jeux Olympiques de Paris 2024 avec Baptiste Addis (17 ans, plus jeune médaillé olympique français), Jean-Charles Valladont (médaillé argent Rio 2016) et Thomas Chirault.\n\n8 athlètes (4 féminins + 4 masculins) en préparation pour Los Angeles 2028.\n\nRégularité au plus haut niveau international : Championnats du Monde, d'Europe, Coupes du Monde et Indoor World Series.`
    },
    {
      title: "Rayonnement International",
      keywords: ["2ème tournoi mondial", "1355 participants", "50 nations"],
      details: "Notre tournoi international Indoor, organisé depuis 1997, est le 2ème plus important au monde après Las Vegas. Intégré au circuit très fermé de l'Indoor World Series (aux côtés de Taipei ou Rio), l'édition 2026 a attiré 1355 compétiteurs de 50 nations au Parnasse de Nîmes. Cette vitrine exceptionnelle, massivement couverte par les médias comme L'Équipe ou Midi Libre, offre à nos partenaires une visibilité internationale de premier plan.",
      imageUrl: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1920&q=80",
    },
    {
      title: "Impact Économique",
      keywords: ["2ème événement de Nîmes", "Dynamisme local", "Retombées massives"],
      details: "Véritable poumon économique, notre tournoi international s'impose comme le deuxième événement majeur de la ville de Nîmes juste après la célèbre Féria. L'afflux de milliers de participants, d'accompagnants et de médias internationaux génère des retombées spectaculaires pour l'hôtellerie, la restauration et le secteur des services. S'associer au club, c'est investir directement dans la croissance du territoire nîmois.",
      imageUrl: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1920&q=80",
    },
    {
      title: "Parité & Inclusion",
      keywords: ["Équipe mixte 50/50", "Para Archerie", "Solidarité internationale"],
      details: "L'Arc Club de Nîmes place l'humain au centre de son projet, avec une parité totale : notre collectif élite olympique est composé de 4 femmes et 4 hommes. Au-delà du haut niveau, nous soutenons activement la Para Archerie et menons une véritable action de solidarité internationale en accompagnant l'équipe nationale de Côte d'Ivoire vers les Jeux de Los Angeles 2028.",
      imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1920&q=80",
    },
    {
      title: "Engagement Territorial",
      keywords: ["9 écoles nîmoises", "Sport pour tous", "Transmission"],
      details: "Profondément ancré dans l'ADN de sa ville, l'Arc Club finance et déploie un programme éducatif majeur dans 9 écoles de Nîmes. De la formation de la jeunesse (à l'image de Baptiste Addis, prodige de 17 ans) à la pratique encadrée pour les séniors, nous rendons le tir à l'arc accessible à tous. Rigueur, concentration et respect : nous transmettons ces valeurs à toutes les générations.",
      imageUrl: "https://images.unsplash.com/photo-1542779632-539b861ee8f9?w=1920&q=80",
    },
  ];

  return (
    <>
      <SEO
        title="Arc Club de Nîmes — Partenaires & Sponsoring"
        description="1er club français de tir à l'arc. Devenez partenaire d'un club médaillé olympique, organisateur du 2ème tournoi mondial."
        image="/og-image.png"
      />
      <Header />
      <main>
        {values.map((value, index) => (
          <ValueSection
            key={index}
            index={index}
            title={value.title}
            keywords={value.keywords}
            details={value.details}
            imageUrl={value.imageUrl}
          />
        ))}
        <CTASection />
      </main>
      <ScrollNavigation totalSections={values.length + 1} />
    </>
  );
}