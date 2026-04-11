import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

const values = [
  {
    title: "Excellence",
    keywords: ["Précision", "Performance", "Dépassement"],
    details: "L'Arc Club de Nîmes cultive l'excellence sportive à travers un encadrement professionnel et des infrastructures de qualité. Nos archers évoluent dans un environnement propice au dépassement de soi.",
    imageUrl: "https://images.unsplash.com/photo-1589034815715-ca1d3a514ba1?w=1920&q=80",
  },
  {
    title: "Tradition",
    keywords: ["Histoire", "Patrimoine", "Valeurs"],
    details: "Héritier d'une discipline millénaire, notre club perpétue les valeurs du tir à l'arc tout en s'adaptant aux exigences modernes du sport de haut niveau.",
    imageUrl: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=1920&q=80",
  },
  {
    title: "Rayonnement",
    keywords: ["Visibilité", "Compétitions", "Médias"],
    details: "Présent dans les compétitions régionales et nationales, l'Arc Club de Nîmes offre à ses partenaires une visibilité exceptionnelle auprès d'une communauté engagée et dynamique.",
    imageUrl: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=1920&q=80",
  },
  {
    title: "Esprit d'Équipe",
    keywords: ["Cohésion", "Solidarité", "Partage"],
    details: "Au-delà de la performance individuelle, notre club valorise l'entraide et la transmission. Chaque archer, du débutant au compétiteur, évolue dans un climat bienveillant.",
    imageUrl: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1920&q=80",
  },
  {
    title: "Innovation",
    keywords: ["Technologie", "Modernité", "Développement"],
    details: "L'Arc Club de Nîmes investit dans les équipements de pointe et les méthodes d'entraînement innovantes pour garantir à ses archers les meilleures conditions de progression.",
    imageUrl: "https://images.unsplash.com/photo-1542779632-539b861ee8f9?w=1920&q=80",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Arc Club de Nîmes — Partenaires & Sponsoring"
        description="Découvrez les valeurs de l'Arc Club de Nîmes et devenez partenaire d'un club d'excellence sportive."
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