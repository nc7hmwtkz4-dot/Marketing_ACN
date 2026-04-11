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
  index: number;
  gallery: GalleryItem[];
}

export function ValueSection({
  id,
  title,
  keywords,
  image,
  details,
  index,
  gallery,
}: ValueSectionProps) {
  const [activeTab, setActiveTab] = useState<"none" | "details" | "gallery">("none");
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

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
          style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
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
            {activeTab === "none" && (
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => setActiveTab("details")}
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all"
                >
                  En savoir plus
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
                
                {gallery.length > 0 && (
                  <Button 
                    onClick={() => setActiveTab("gallery")}
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all"
                  >
                    <Images className="mr-2 w-5 h-5" />
                    Galerie
                  </Button>
                )}
              </div>
            )}

            {activeTab === "details" && (
              <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl text-left animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[50vh] overflow-y-auto">
                <button
                  onClick={() => setActiveTab("none")}
                  className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                  {details}
                </p>
              </div>
            )}

            {activeTab === "gallery" && gallery.length > 0 && (
              <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[60vh] overflow-y-auto">
                <button
                  onClick={() => setActiveTab("none")}
                  className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-20"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="space-y-6">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <img
                      src={gallery[selectedGalleryIndex].src}
                      alt={gallery[selectedGalleryIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-left space-y-2">
                    <h3 className="text-2xl font-bold">
                      {gallery[selectedGalleryIndex].title}
                    </h3>
                    <p className="text-lg text-white/80">
                      {gallery[selectedGalleryIndex].description}
                    </p>
                  </div>

                  {gallery.length > 1 && (
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {gallery.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedGalleryIndex(idx)}
                          className={`aspect-video rounded-lg overflow-hidden transition-all ${
                            idx === selectedGalleryIndex
                              ? "ring-2 ring-accent scale-105"
                              : "opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
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