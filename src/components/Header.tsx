import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Globe, Facebook, Instagram } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Image
            src="/logo.png"
            alt="Arc Club de Nîmes"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-foreground">Arc Club de Nîmes</h1>
            <p className="text-xs text-muted-foreground">Stade de l'Assomption, 30000 Nîmes</p>
          </div>
        </div>

        <nav className="flex items-center gap-3 text-sm">
          <a
            href="tel:+33466291632"
            className="hidden sm:flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">04 66 29 16 32</span>
          </a>
          <a
            href="mailto:contact@arcclubdenimes.com"
            className="hidden sm:flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden lg:inline">contact@arcclubdenimes.com</span>
          </a>
          <a
            href="https://www.arcclubdenimes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/arcclubdenimes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/nimes.archery/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.tiktok.com/@arc.club.de.nimes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}