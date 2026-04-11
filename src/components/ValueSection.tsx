import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ValueSectionProps {
  title: string;
  keywords: string[];
  details?: string;
  imageUrl: string;
  index: number;
}

export function ValueSection({
  id,
  title,
  keywords,
  image,
  details,
  index,
}: ValueSectionProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section
      id={id}
      className="relative min-h-screen snap-start snap-always flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      <div className="container mx-auto px-4 text-center text-white z-10">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="inline-block text-sm font-medium tracking-wider uppercase opacity-80">
            Valeur {index + 1}
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            {title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl">
            {keywords.map((keyword, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              >
                {keyword}
              </span>
            ))}
          </div>
          {details && (
            <div className="pt-4">
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Masquer" : "En savoir plus"}
                <ChevronDown className={`ml-2 w-4 h-4 transition-transform ${showDetails ? "rotate-180" : ""}`} />
              </Button>
              {showDetails && (
                <p className="mt-6 text-base md:text-lg max-w-xl mx-auto leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                  {details}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}