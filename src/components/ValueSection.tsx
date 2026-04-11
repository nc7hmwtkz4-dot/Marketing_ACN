import { useState } from "react";
import { ChevronDown, X, Images } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface GalleryItem {
  type: "image" | "article";
  src: string;
  title?: string;
  description?: string;
}

export interface ValueSectionProps {
  id: string;
  title: string;
  keywords: string[];
  image: string;
  details: string;
  gallery?: GalleryItem[];
  index: number;
}

export function ValueSection({
  id,
  title,
  keywords,
  image,
  details,
  gallery = [],
  index,
}: ValueSectionProps) {
  const [activeView, setActiveView] = useState<"closed" | "details" | "gallery">("closed");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
            {activeView === "closed" ? (
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => setActiveView("details")}
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all"
                >
                  En savoir plus
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
                {gallery.length > 0 && (
                  <Button 
                    onClick={() => setActiveView("gallery")}
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-all"
                  >
                    Galerie
                    <Images className="ml-2 w-5 h-5" />
                  </Button>
                )}
              </div>
            ) : activeView === "details" ? (
              <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl text-left animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[50vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">Détails</h3>
                  <Button
                    onClick={() => setActiveView("closed")}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                  {details}
                </p>
              </div>
            ) : (
              <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[60vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold">Galerie</h3>
                  <Button
                    onClick={() => setActiveView("closed")}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {gallery.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedItem(item)}
                      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer hover:ring-2 hover:ring-accent transition-all"
                    >
                      <img
                        src={item.src}
                        alt={item.title || `Galerie ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.title && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                          <p className="text-sm font-medium line-clamp-2">{item.title}</p>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <Button
              onClick={() => setSelectedItem(null)}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
            >
              <X className="w-8 h-8" />
            </Button>
            <img
              src={selectedItem.src}
              alt={selectedItem.title || "Image"}
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            {selectedItem.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h4 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h4>
                {selectedItem.description && (
                  <p className="text-white/90">{selectedItem.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}