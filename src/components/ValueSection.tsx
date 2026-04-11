import { useState } from "react";
import { ChevronDown, X, Images } from "lucide-react";
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
  index
}: ValueSectionProps) {
  const [activeTab, setActiveTab] = useState<"none" | "details" | "gallery">("none");
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  return (
    <section
      id={id}
      className="relative min-h-screen snap-start snap-always flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* TITRE ET MOTS-CLÉS - TOUJOURS VISIBLES */}
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {title}
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-2xl font-medium text-white">
            {keywords.map((keyword, i) =>
            <span key={i} className="flex items-center gap-4">
                <span>3 médailles Olympiques</span>
                {i < keywords.length - 1 &&
              <span className="w-2 h-2 rounded-full bg-accent hidden md:block" />
              }
              </span>
            )}
          </div>

          {/* BOUTONS OU CONTENU */}
          <div className="pt-8">
            {activeTab === "none" &&
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                onClick={() => setActiveTab("details")}
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all">
                
                  En savoir plus
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
                
                {gallery.length > 0 &&
              <Button
                onClick={() => setActiveTab("gallery")}
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all">
                
                    <Images className="mr-2 w-5 h-5" />
                    Galerie
                  </Button>
              }
              </div>
            }

            {activeTab === "details" &&
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl text-left max-h-[50vh] overflow-y-auto">
                  <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-white">
                    {details}
                  </p>
                </div>
                <Button
                onClick={() => setActiveTab("none")}
                variant="ghost"
                className="text-white hover:bg-white/10">
                
                  <X className="mr-2 w-5 h-5" />
                  Fermer
                </Button>
              </div>
            }

            {activeTab === "gallery" && gallery.length > 0 &&
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl max-h-[60vh] overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {gallery.map((item, idx) =>
                  <div
                    key={idx}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-video bg-black/20"
                    onClick={() => setSelectedGalleryIndex(idx)}>
                    
                        <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="text-sm font-semibold text-white">{item.title}</p>
                          </div>
                        </div>
                      </div>
                  )}
                  </div>
                </div>
                <Button
                onClick={() => setActiveTab("none")}
                variant="ghost"
                className="text-white hover:bg-white/10">
                
                  <X className="mr-2 w-5 h-5" />
                  Fermer
                </Button>
              </div>
            }
          </div>
        </div>
      </div>

      {/* MODAL GALERIE FULLSCREEN */}
      {activeTab === "gallery" && selectedGalleryIndex !== null &&
      <div
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        onClick={() => setSelectedGalleryIndex(0)}>
        
          <button
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("none");
            setSelectedGalleryIndex(0);
          }}
          className="absolute top-4 right-4 text-white hover:text-accent transition-colors">
          
            <X className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
            src={gallery[selectedGalleryIndex].src}
            alt={gallery[selectedGalleryIndex].title}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
          
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{gallery[selectedGalleryIndex].title}</h3>
              <p className="text-lg text-white/80">{gallery[selectedGalleryIndex].description}</p>
            </div>
          </div>
        </div>
      }
    </section>);

}