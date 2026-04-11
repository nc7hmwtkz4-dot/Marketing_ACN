import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ValueSectionProps {
  id: string;
  title: string;
  keywords: string[];
  image: string;
  details: string;
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
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div 
          className="max-w-4xl mx-auto space-y-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            {title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-2xl font-medium">
            {keywords.map((keyword, i) => (
              <span key={i} className="flex items-center gap-4">
                <span>{keyword}</span>
                {i < keywords.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-accent hidden md:block" />
                )}
              </span>
            ))}
          </div>

          <div className="pt-8">
            {!showDetails ? (
              <Button 
                onClick={() => setShowDetails(true)}
                variant="outline" 
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all"
              >
                En savoir plus
                <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
              </Button>
            ) : (
              <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl text-left animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[50vh] overflow-y-auto">
                <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                  {details}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}