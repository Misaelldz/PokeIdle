import React from "react";
import { useGame } from "../../../context/GameContext";
import { REGIONS } from "../../../lib/regions";
import { ITEMS } from "../../../lib/items";
import { ItemSprite } from "../../../components/ui/ItemSprite";

export function LootTablePopover() {
  const { run } = useGame();

  if (!run.isActive || !run.currentRegion) return null;

  const region = REGIONS[run.currentRegion];
  if (!region) return null;

  const zone = region.zones[run.currentZoneIndex];
  if (!zone) return null;

  return (
    <div className="group relative w-full mt-1">
      <button className="w-full py-1.5 border-2 border-border font-display text-[0.55rem] text-muted hover:border-brand hover:text-brand transition-colors uppercase tracking-widest">
        Ver Loot
      </button>
      <div className="absolute left-0 top-full mt-2 w-full min-w-[200px] bg-surface-dark border-2 border-border p-2 hidden group-hover:block z-50 shadow-pixel">
        <h4 className="text-[0.6rem] font-display text-accent-blue mb-2 text-center border-b border-border/50 pb-1">
          RECOMPENSAS DE ZONA
        </h4>
        {zone.itemDrops.length > 0 ? (
          <ul className="flex flex-col gap-1.5">
            {zone.itemDrops.map((drop, i) => {
              const item = ITEMS[drop.itemId];
              if (!item) return null;
              return (
                <li
                  key={i}
                  className="flex justify-between items-center text-[0.6rem] font-body text-foreground px-1"
                >
                  <span className="flex items-center gap-2">
                    <ItemSprite item={item} size={16} />
                    <span className="truncate max-w-[100px]">{item.name}</span>
                  </span>
                  <span className="font-display text-[0.5rem] text-muted">
                    {Math.round(drop.chance * 100)}%
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-[0.6rem] text-muted italic text-center p-2">
            No hay objetos en esta zona.
          </p>
        )}
      </div>
    </div>
  );
}
