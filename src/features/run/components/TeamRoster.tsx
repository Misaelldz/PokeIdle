import React from "react";
import { useGame } from "../../../context/GameContext";
import { PokemonCard } from "./PokemonCard";

export function TeamRoster() {
  const { run } = useGame();

  if (!run.isActive) return null;

  return (
    <div className="flex flex-col gap-2 p-3 flex-1 overflow-y-auto min-h-0">
      <div className="flex justify-between items-center mb-2 border-b-2 border-border pb-2">
        <div className="flex items-center gap-2">
          <h2 className="font-display text-brand text-[0.65rem] tracking-wider">
            MI EQUIPO
          </h2>
          <button
            onClick={() => (window as any).openBag?.()}
            className="font-display text-[0.55rem] text-muted hover:text-brand transition-colors uppercase tracking-widest border-b border-transparent hover:border-brand"
            title="Abrir Inventario"
          >
            Inventario
          </button>
        </div>
        <span className="font-body text-muted text-xs font-bold">
          {run.team.length}/6
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {run.team.map((pokemon) => {
          const isActive =
            run.currentBattle?.playerPokemon?.uid === pokemon.uid;
          return (
            <PokemonCard
              key={pokemon.uid}
              pokemon={pokemon}
              isActive={isActive}
            />
          );
        })}

        {run.team.length < 6 && run.team.length > 0 && (
          <div className="mt-2 p-2 border border-dashed border-border/40 rounded-sm">
            <p className="font-body text-[0.6rem] text-muted italic text-center leading-tight">
              Captura Pokémon en batalla para completar tu equipo
            </p>
          </div>
        )}

        {run.team.length === 0 && (
          <div className="text-center p-6 border-2 border-dashed border-border text-muted font-body text-xs bg-surface-alt">
            No tienes Pokémon en tu equipo.
          </div>
        )}
      </div>
    </div>
  );
}
