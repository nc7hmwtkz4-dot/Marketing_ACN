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
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Devenez Partenaire
          </h2>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Rejoignez l'Arc Club de Nîmes et associez votre marque à l'excellence sportive.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
            >
              <a href="tel:+33466291632">
                <Phone className="mr-2 w-5 h-5" />
                04 66 29 16 32
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-full"
            >
              <a href="mailto:contact@arcclubdenimes.com">
                <Mail className="mr-2 w-5 h-5" />
                Nous contacter
              </a>
            </Button>
          </div>
          <div className="pt-12 text-sm opacity-70">
            <p>Arc Club de Nîmes — Stade de l'Assomption</p>
            <p>7 Rue Marcel Pellissier, 30000 Nîmes</p>
          </div>
        </div>
      </div>
    </section>
  );
}