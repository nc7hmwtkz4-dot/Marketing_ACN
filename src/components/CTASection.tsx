import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen snap-start snap-always flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/devenez-partenaire.jpg"
          alt="Devenez partenaire"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Devenez Partenaire
          </h2>
          
          <p className="text-xl md:text-2xl leading-relaxed">
            Rejoignez l'aventure du 1er club français de tir à l'arc
            et associez votre marque à l'excellence sportive.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full"
            >
              <a href="tel:+33466291632" className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                04 66 29 16 32
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full"
            >
              <a href="mailto:contact@arcclubdenimes.com" className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                contact@arcclubdenimes.com
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        <p className="text-white/40 text-xs font-light">
          Crédit photo ©World Archery
        </p>
      </div>
    </section>
  );
}