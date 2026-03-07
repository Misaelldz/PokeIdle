import React from 'react';
import { useGame } from '../../../context/GameContext';
import { REGIONS } from '../../../lib/regions';
import type { Zone } from '../../../lib/regions';
import { clsx } from 'clsx';
import { Trophy, CircleDashed, CheckCircle2, ChevronRight, Medal, ChevronDown } from 'lucide-react';

interface RegionMapProps {
  zones: Zone[];
}

export function RegionMap({ zones }: RegionMapProps) {
  const { run } = useGame();

  if (!run.isActive) return null;

  const regionBase = REGIONS[run.currentRegion];
  if (!regionBase) return null;

  const region = { ...regionBase, zones };

  return (
    <div className="flex flex-col p-3 border-b-2 border-border mb-2 bg-surface-alt shadow-inner">
      <h2 className="font-display text-brand text-[0.65rem] uppercase mb-4 tracking-wider">
        REGIÓN {region.name}
      </h2>

      <div className="flex flex-col gap-3">
        <div className="relative group">
          <select
            value={run.currentZoneIndex}
            disabled
            className="w-full bg-surface-alt border-2 border-border p-3 font-display text-[0.65rem] text-foreground appearance-none cursor-default opacity-100"
          >
            {region.zones.map((zone, index) => (
              <option key={zone.id} value={index}>
                {index < run.currentZoneIndex ? "✅ " : index === run.currentZoneIndex ? "📍 " : "🔒 "}
                {zone.name} {zone.isGym ? "(GYM)" : ""}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
            <ChevronDown size={14} />
          </div>
        </div>

        {/* Current Zone Detail & Progress */}
        {region.zones[run.currentZoneIndex] && (
          <div className={clsx(
            "p-3 border-2 flex flex-col gap-2",
            region.zones[run.currentZoneIndex].isGym 
              ? "bg-accent/5 border-accent/30" 
              : "bg-brand/5 border-brand/30"
          )}>
            <div className="flex justify-between items-center">
              <span className={clsx(
                "font-display text-[0.6rem] uppercase tracking-tighter",
                region.zones[run.currentZoneIndex].isGym ? "text-accent" : "text-brand"
              )}>
                {region.zones[run.currentZoneIndex].name}
              </span>
              {region.zones[run.currentZoneIndex].isGym && (
                <Medal size={14} className="text-accent shadow-accent/50" />
              )}
            </div>
            
            <div className="flex flex-col gap-1.5">
              <div className="h-2 bg-black/40 border border-border/30 overflow-hidden">
                <div 
                  className={clsx(
                    "h-full transition-all duration-500",
                    region.zones[run.currentZoneIndex].isGym ? "bg-accent" : "bg-brand"
                  )}
                  style={{ width: `${Math.floor(run.currentZoneProgress)}%` }}
                />
              </div>
              <span className="font-display text-[0.45rem] text-muted text-right tracking-widest uppercase">
                Explorando: {Math.floor(run.currentZoneProgress)}%
              </span>
            </div>
          </div>
        )}

        {region.eliteFour && (
          <div className="flex items-center gap-3 py-3 pt-4 border-t-2 border-dashed border-border z-10 bg-surface-alt">
            <div className="bg-surface-alt rounded-full border-2 border-accent p-1 shadow-[0_0_10px_rgba(255,215,0,0.2)]">
               <Trophy size={16} className="text-accent" />
            </div>
            <div className="flex flex-col font-display text-[0.6rem]">
              <span className="text-accent tracking-wider drop-shadow-[0_0_5px_rgba(255,215,0,0.3)]">LIGA POKÉMON</span>
              <span className="text-[0.45rem] mt-1 text-muted">
                {run.eliteFourDefeated ? "COMPLETADO" : (run.gymsBadges.length >= 8 ? "DESBLOQUEADO" : `REQUIERE 8 MEDALLAS (${run.gymsBadges.length}/8)`)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
