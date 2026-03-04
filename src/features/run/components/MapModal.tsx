import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useGame } from "../../../context/GameContext";
import { REGIONS } from "../../../lib/regions";
import { PixelSprite } from "../../../components/ui/PixelSprite";

interface MapModalProps {
  onClose: () => void;
}

export function MapModal({ onClose }: MapModalProps) {
  const { run } = useGame();
  
  if (!run.isActive || !run.currentRegion) return null;
  const region = REGIONS[run.currentRegion];

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div 
        className="bg-surface border-4 border-border w-full max-w-2xl max-h-[80vh] flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.8)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-surface-dark p-3 border-b-4 border-border flex justify-between items-center shadow-pixel relative">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/town-map.png"
              alt="Map Sprite"
              className="w-8 h-8 rendering-pixelated drop-shadow-md"
            />
            <h2 className="font-display text-brand text-xl sm:text-2xl uppercase drop-shadow-sm tracking-widest shadow-black" style={{ textShadow: "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
              Mapa de {region.name}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 bg-danger border-2 border-border flex items-center justify-center text-white font-display hover:bg-red-500 transition-colors shadow-pixel active:translate-y-px"
          >
            X
          </button>
        </div>

        <div className="p-4 overflow-y-auto no-scrollbar flex-1 bg-surface flex flex-col gap-3 relative">
          {/* Subtle background map pattern could go here */}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {region.zones.map((zone, idx) => {
              const isPast = idx < run.currentZoneIndex;
              const isCurrent = idx === run.currentZoneIndex;
              const isFuture = idx > run.currentZoneIndex;
              
              const isGym = zone.name.toLowerCase().includes("gimnasio") || (zone as any).isGym;

              return (
                <div 
                  key={zone.id} 
                  className={`border-2 p-3 flex flex-col relative transition-all ${
                    isCurrent 
                      ? "border-brand bg-brand/10 shadow-[inner_0_0_10px_rgba(var(--brand-rgb),0.2)]" 
                      : isPast 
                        ? "border-accent/50 bg-black/20" 
                        : "border-border/50 bg-surface-dark opacity-70"
                  }`}
                >
                  {/* Status Indicator */}
                  <div className={`absolute top-0 right-0 px-2 py-0.5 text-[0.45rem] font-display border-b-2 border-l-2 uppercase tracking-wider ${
                    isCurrent ? "bg-brand border-brand-deep text-white" :
                    isPast ? "bg-accent border-accent text-black" :
                    "bg-surface-dark border-border text-muted"
                  }`}>
                    {isCurrent ? "Actual" : isPast ? "Completado" : "Bloqueado"}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2 pr-12">
                     <div className={`w-6 h-6 shrink-0 border-2 flex items-center justify-center font-display text-[0.55rem] ${
                       isGym ? "rounded-full" : ""
                     } ${
                       isCurrent ? "bg-brand border-brand-deep text-white shadow-[0_0_5px_rgba(255,0,0,0.5)]" : 
                       isPast ? "bg-accent border-accent text-black" : 
                       "bg-surface-dark border-border text-muted"
                     }`}>
                      {idx + 1}
                     </div>
                     <h3 className={`font-display text-sm tracking-wide line-clamp-1 ${isCurrent ? "text-white" : isPast ? "text-accent-blue" : "text-muted"}`}>
                       {zone.name}
                     </h3>
                  </div>
                  
                  <p className="font-body text-[0.6rem] text-muted italic mb-3 line-clamp-2 h-8">
                    "{zone.description}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-border/50 pt-2 mt-auto">
                    <div className="flex flex-col">
                      <span className="font-display text-[0.4rem] text-muted tracking-widest uppercase">Entrenadores</span>
                      <span className="font-body text-xs text-foreground font-bold">{zone.trainerCount} Batallas</span>
                    </div>
                    
                    <div className="flex flex-col text-right">
                      <span className="font-display text-[0.4rem] text-muted tracking-widest uppercase">Especies Salvajes</span>
                      <span className="font-body text-xs text-brand font-bold">{zone.wildPokemon.length} Especies</span>
                    </div>
                  </div>
                  
                  {/* Small preview of wild pokemon if current or past */}
                  {(!isFuture) && (
                    <div className="mt-2 flex gap-1 overflow-hidden h-8">
                      {zone.wildPokemon.slice(0, 5).map(wp => (
                        <div key={wp.pokemonId} className="w-8 h-8 flex items-center justify-center bg-black/40 border border-border/50 shrink-0">
                           <PixelSprite
                            pokemonId={wp.pokemonId}
                            variant="front"
                            size={24}
                            showScanlines={false}
                            className="opacity-80"
                          />
                        </div>
                      ))}
                      {zone.wildPokemon.length > 5 && (
                        <div className="w-8 h-8 flex items-center justify-center bg-black/40 border border-border/50 shrink-0 font-display text-[0.5rem] text-muted">
                          +{zone.wildPokemon.length - 5}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="bg-surface-dark p-2 border-t border-border flex justify-between items-center px-4">
          <span className="font-display text-[0.55rem] text-muted">Progreso Regional: {Math.round((run.currentZoneIndex / region.zones.length) * 100)}%</span>
          <span className="font-display text-[0.55rem] text-brand pulse opacity-70">Sistema de Navegación Silph S.A.</span>
        </div>
      </div>
    </div>,
    document.body
  );
}
