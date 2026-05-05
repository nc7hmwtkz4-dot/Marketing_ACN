import type { ReactElement } from "react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { ValueSection, type GalleryItem } from "@/components/ValueSection";
import { CTASection } from "@/components/CTASection";
import { ScrollNavigation } from "@/components/ScrollNavigation";

export default function Home() {
  const territorialGallery: GalleryItem[] = [];

  return (
    <>
      <SEO
        title="Arc Club de Nîmes - Nos Valeurs"
        description="Découvrez les 5 valeurs de l'Arc Club de Nîmes : Excellence sportive, Rayonnement international, Impact économique, Parité & inclusion, Engagement territorial"
        image="/og-image.png"
      />
      <Header />
      <main className="scroll-smooth snap-y snap-mandatory h-screen overflow-y-scroll">
        <ValueSection
          index={2}
          id="impact"
          title="Impact Économique"
          keywords={["Hôtellerie", "Restauration", "Commerce Local", "Tourisme Sportif"]}
          image="/CyrilTONDUT066.jpg"
          details="L'Arc Club de Nîmes génère un impact économique significatif sur le territoire. Le tournoi Nîmes Archery Trophy 2026 devrait générer 2 millions d'euros de retombées économiques directes, avec 2 350 visiteurs séjournant en moyenne 3,5 jours dans la région.

L'événement bénéficie directement aux acteurs économiques locaux : hôtellerie (750 nuitées), restauration (plus de 15 000 repas), commerces et services. Au-delà du tournoi annuel, l'activité régulière du club génère environ 400 000€ d'impact économique indirect par an.

Le tir à l'arc contribue ainsi au dynamisme économique de Nîmes tout en renforçant son attractivité touristique. Notre club est un acteur économique à part entière, créateur d'emplois et générateur de richesse pour le territoire."
          gallery={[]}
        />
      </main>
      <ScrollNavigation sections={[]} />
    </>
  );
}