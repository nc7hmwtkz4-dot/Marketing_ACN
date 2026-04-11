import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

const values = [
  {
    title: "Excellence Sportive",
    keywords: ["1er club français", "2 médailles Paris 2024", "8 athlètes élite"],
    details: "Premier club français sur 1600 affiliés, l'Arc Club de Nîmes cultive l'excellence depuis 1985. Deux médailles d'argent aux Jeux Olympiques de Paris 2024, présence régulière aux JO depuis 1996, et un collectif de 8 athlètes (4 femmes, 4 hommes) engagés vers Los Angeles 2028. Nos archers sont médaillés à tous les niveaux internationaux : Championnats du Monde, d'Europe, Coupe du Monde et Indoor World Series.",
    imageUrl: "https://images.unsplash.com/photo-1589034815715-ca1d3a514ba1?w=1920&q=80",
  },
  {
    title: "Rayonnement International",
    keywords: ["2ème tournoi mondial", "1355 participants", "50 nations"],
    details: "Notre tournoi international Indoor, organisé depuis 1997, est le 2ème plus important au monde après Las Vegas. Intégré au circuit Indoor World Series (Lausanne, Taipei, Luxembourg, Rio, Nîmes, Mérida, Las Vegas), il a réuni 1355 participants de 50 nations en 2026. Cette reconnaissance internationale offre à nos partenaires une visibilité exceptionnelle sur la scène mondiale du tir à l'arc.",
    imageUrl: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1920&q=80",
  },
  {
    title: "Impact Économique",
    keywords: ["2ème événement de Nîmes", "Hôtellerie & restauration", "Retombées mesurables"],
    details: "Après la Féria, notre tournoi est le deuxième événement de Nîmes en termes de retombées économiques. Des centaines de participants et accompagnants séjournent dans la ville pendant plusieurs jours, générant des revenus significatifs pour l'hôtellerie, la restauration et les services locaux. Un partenariat avec l'Arc Club, c'est un investissement dans le dynamisme économique du territoire.",
    imageUrl: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1920&q=80",
  },
  {
    title: "Parité & Inclusion",
    keywords: ["Équipe mixte 50/50", "Para Archerie", "Solidarité internationale"],
    details: "L'Arc Club de Nîmes porte des valeurs d'égalité et d'inclusion. Notre collectif olympique compte autant de femmes que d'hommes. Nous soutenons activement la Para Archerie et accompagnons depuis 2024 deux athlètes ivoiriens (1 homme, 1 femme) de l'équipe nationale de Côte d'Ivoire pour Los Angeles 2028. Le sport comme vecteur d'égalité et de solidarité internationale.",
    imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1920&q=80",
  },
  {
    title: "Engagement Territorial",
    keywords: ["9 écoles partenaires", "Sport pour tous", "Ancrage local"],
    details: "Ancré dans la vie nîmoise depuis près de 40 ans, le club finance et réalise un programme éducatif dans 9 écoles de la ville. Nous proposons une pratique accessible aux séniors et soutenons le développement du tir à l'arc pour tous les publics. Notre engagement : transmettre nos valeurs de concentration, maîtrise de soi et dépassement aux nouvelles générations.",
    imageUrl: "https://images.unsplash.com/photo-1542779632-539b861ee8f9?w=1920&q=80",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Arc Club de Nîmes — Partenaires & Sponsoring"
        description="1er club français de tir à l'arc, 2ème tournoi mondial. Devenez partenaire d'un club olympique d'excellence et d'impact territorial."
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