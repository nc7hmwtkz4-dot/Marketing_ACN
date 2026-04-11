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
  gallery: GalleryItem[];
  index: number;
}

export function ValueSection({
  id,
  title,
  keywords,
  image,
  details,
  gallery,
  index,
}: ValueSectionProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

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
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 md:py-0 text-center text-white">
        <div 
          className="max-w-4xl mx-auto space-y-6 md:space-y-8 opacity-0 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight px-2">
            {title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-base sm:text-lg md:text-xl lg:text-2xl font-medium px-2">
            {keywords.map((keyword, i) => (
              <span key={i} className="flex items-center gap-3 md:gap-4">
                <span className="leading-tight">{keyword}</span>
                {i < keywords.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-accent hidden sm:block" />
                )}
              </span>
            ))}
          </div>

          <div className="pt-6 md:pt-8">
            {!showDetails && !showGallery ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => setShowDetails(true)}
                  variant="outline" 
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all"
                >
                  En savoir plus
                  <ChevronDown className="ml-2 w-4 h-4 md:w-5 md:h-5 animate-bounce" />
                </Button>
                
                {gallery.length > 0 && (
                  <Button 
                    onClick={() => setShowGallery(true)}
                    variant="outline" 
                    className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full transition-all"
                  >
                    <Images className="mr-2 w-4 h-4 md:w-5 md:h-5" />
                    Galerie ({gallery.length})
                  </Button>
                )}
              </div>
            ) : showDetails ? (
              <div className="bg-black/60 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-2xl text-left animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[60vh] md:max-h-[50vh] overflow-y-auto">
                <Button
                  onClick={() => setShowDetails(false)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-wrap pr-8">
                  {details}
                </p>
              </div>
            ) : (
              <div className="bg-black/60 backdrop-blur-md p-6 md:p-8 lg:p-12 rounded-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[70vh] overflow-y-auto">
                <Button
                  onClick={() => setShowGallery(false)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full z-20"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
                
                <div className="relative">
                  <img
                    src={gallery[currentImageIndex].src}
                    alt={gallery[currentImageIndex].title}
                    className="w-full h-auto max-h-[40vh] md:max-h-[50vh] object-contain rounded-lg"
                  />
                  
                  {gallery.length > 1 && (
                    <>
                      <Button
                        onClick={prevImage}
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                      >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                      </Button>
                      <Button
                        onClick={nextImage}
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                      >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                      </Button>
                    </>
                  )}
                </div>
                
                <div className="mt-4 md:mt-6 text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">
                    {gallery[currentImageIndex].title}
                  </h3>
                  <p className="text-sm md:text-base text-white/80">
                    {gallery[currentImageIndex].description}
                  </p>
                  {gallery.length > 1 && (
                    <p className="text-xs md:text-sm text-white/60 mt-2">
                      {currentImageIndex + 1} / {gallery.length}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}