import { useState } from "react";
import { ChevronDown, X, Images, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  type: "image" | "article";
  src: string;
  title: string;
  description: string;
}

export interface ValueSectionProps {
  id: string;
  title: string;
  keywords: string[];
  image: string;
  details: string;
  index: number;
  gallery: GalleryItem[];
}

export function ValueSection({
  id,
  title,
  keywords,
  image,
  details,
  gallery,
}: ValueSectionProps) {
  const [activeTab, setActiveTab] = useState<"none" | "details" | "gallery">("none");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const isEconomieSection = id === "economie";

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 text-white">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            {title}
          </h2>

          {isEconomieSection ? (
            <div className="space-y-12 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-accent rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-3">
                    1,6M€
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white mb-2">
                    Retombées Directes
                  </div>
                  <div className="text-sm text-white/80">
                    Tournoi 2026
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border-2 border-secondary rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                  <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">
                    400K€
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white mb-2">
                    Impact Indirect
                  </div>
                  <div className="text-sm text-white/80">
                    Par an
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm border-2 border-primary rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                    2350
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-white mb-2">
                    Visiteurs
                  </div>
                  <div className="text-sm text-white/80">
                    3,5 jours moyenne
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center text-base md:text-lg">
                {keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium text-white border border-white/30"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveTab("details")}
                className="mt-6 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 text-lg"
              >
                En savoir plus
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-4 justify-center text-base md:text-lg lg:text-2xl">
                {keywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full font-medium text-white"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button
                  onClick={() => setActiveTab("details")}
                  className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2 text-lg"
                >
                  En savoir plus
                  <ChevronDown className="w-5 h-5" />
                </button>

                {gallery && gallery.length > 0 && (
                  <button
                    onClick={() => setActiveTab("gallery")}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center gap-2 text-lg"
                  >
                    <Images className="w-5 h-5" />
                    Galerie
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            {title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 lg:gap-8 text-base md:text-xl lg:text-2xl font-medium text-white">
            {keywords.map((keyword, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-4">
                <span className="text-white">{keyword}</span>
                {i < keywords.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-accent hidden md:block" />
                )}
              </span>
            ))}
          </div>

          <div className="pt-6 md:pt-8">
            {activeTab === "none" && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => setActiveTab("details")}
                  variant="outline" 
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all"
                >
                  En savoir plus
                  <ChevronDown className="ml-2 w-4 h-4 md:w-5 md:h-5 animate-bounce" />
                </Button>

                {gallery.length > 0 && (
                  <Button 
                    onClick={() => setActiveTab("gallery")}
                    variant="outline" 
                    className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all"
                  >
                    <Images className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Galerie
                  </Button>
                )}
              </div>
            )}

            {activeTab === "details" && (
              <div className="bg-black/50 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-2xl text-left animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[60vh] md:max-h-[50vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Détails</h3>
                  <Button
                    onClick={() => setActiveTab("none")}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </div>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-wrap text-white">
                  {details}
                </p>
              </div>
            )}

            {activeTab === "gallery" && gallery.length > 0 && (
              <div className="bg-black/50 backdrop-blur-md p-4 md:p-6 lg:p-8 rounded-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">Galerie</h3>
                  <Button
                    onClick={() => setActiveTab("none")}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5 md:w-6 md:h-6" />
                  </Button>
                </div>

                <div className="relative">
                  <img
                    src={gallery[currentImageIndex].src}
                    alt={gallery[currentImageIndex].title}
                    className="w-full h-[40vh] md:h-[50vh] object-cover rounded-lg mb-4"
                  />
                  
                  {gallery.length > 1 && (
                    <>
                      <Button
                        onClick={prevImage}
                        variant="ghost"
                        size="sm"
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-white p-2 md:p-3"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                      </Button>
                      <Button
                        onClick={nextImage}
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 hover:text-white p-2 md:p-3"
                      >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                      </Button>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-xs md:text-sm">
                        {currentImageIndex + 1} / {gallery.length}
                      </div>
                    </>
                  )}
                </div>

                <div className="text-left">
                  <h4 className="font-bold text-base md:text-lg mb-1 text-white">
                    {gallery[currentImageIndex].title}
                  </h4>
                  <p className="text-sm md:text-base text-white/80">
                    {gallery[currentImageIndex].description}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}