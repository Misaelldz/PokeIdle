import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useGame } from "../../../context/GameContext";
import { PixelSprite } from "../../../components/ui/PixelSprite";
import { clsx } from "clsx";

// This modal is triggered by run.pendingMegaEvolution
// Shape: { pokemonUid: string; fromName: string; toName: string; fromId: number; toId: number; megaName: string }

type Phase = "charge" | "burst" | "reveal";

export function MegaEvolutionModal() {
  const { run, setRun } = useGame();
  const [phase, setPhase] = useState<Phase>("charge");

  const pending = run.pendingMegaEvolution;

  useEffect(() => {
    if (!pending) {
      setPhase("charge");
      return;
    }

    const t1 = setTimeout(() => setPhase("burst"), 1800);
    const t2 = setTimeout(() => setPhase("reveal"), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pending]);

  // Auto-close logic
  useEffect(() => {
    if (phase !== "reveal") return;
    const t = setTimeout(() => {
      setRun((prev) => ({ ...prev, pendingMegaEvolution: null }));
    }, 2500);
    return () => clearTimeout(t);
  }, [phase, setRun]);

  if (!pending) return null;

  const currentPokemon = run.team.find((p) => p.uid === pending.pokemonUid);

  return createPortal(
    <div className="fixed inset-0 z-999998 flex items-center justify-center p-4 overflow-hidden bg-black/90 backdrop-blur-md">
      {/* Animated background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden text-purple-400">
        {phase !== "charge" && (
          <>
            <div className="absolute w-[120vw] h-[120vw] rounded-full border border-purple-500/10 animate-[ping_2s_linear_infinite]" />
            <div className="absolute w-[90vw] h-[90vw] rounded-full border border-purple-400/15 animate-[ping_1.5s_linear_infinite] delay-300" />
            <div className="absolute w-[60vw] h-[60vw] rounded-full border-2 border-purple-300/20 animate-[ping_1.2s_linear_infinite] delay-100" />
          </>
        )}
        
        {/* Energy burst lines */}
        {phase === "burst" && (
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-linear-to-t from-purple-500/0 via-purple-300/60 to-transparent"
                style={{
                  height: "45vw",
                  transformOrigin: "bottom center",
                  transform: `rotate(${i * 45}deg) translateY(-50%)`,
                  animation: `megaBeam 0.8s ease-out forwards ${i * 0.05}s`,
                }}
              />
            ))}
          </div>
        )}
        
        {/* Radial glow */}
        <div
          className={clsx(
            "absolute rounded-full transition-all duration-700 blur-2xl",
            phase === "charge" && "w-32 h-32 bg-purple-900/20",
            phase === "burst" && "w-[50vw] h-[50vw] bg-purple-600/25",
            phase === "reveal" && "w-[40vw] h-[40vw] bg-purple-500/15",
          )}
        />
      </div>

      {/* Main card */}
      <div className={clsx(
        "relative w-full max-w-md bg-surface-dark border-4 shadow-2xl flex flex-col items-center overflow-hidden transition-all duration-500",
        phase === "burst" ? "border-purple-400 shadow-[0_0_60px_rgba(168,85,247,0.5)]" : "border-purple-800/60 shadow-[0_0_30px_rgba(168,85,247,0.2)]",
      )}>

        {/* Top accent bar */}
        <div className={clsx(
          "w-full h-1 transition-all duration-700",
          phase === "charge" && "bg-purple-800",
          phase === "burst" && "bg-linear-to-r from-purple-600 via-white to-purple-600 animate-pulse",
          phase === "reveal" && "bg-linear-to-r from-purple-500 via-purple-300 to-purple-500",
        )} />

        <div className="w-full p-8 flex flex-col items-center gap-6 relative z-10">

          {/* Title */}
          <div className="flex flex-col items-center gap-1">
            <p className="font-display text-[0.55rem] tracking-[0.3em] text-purple-400 uppercase">
              {phase === "reveal" ? "¡MEGA EVOLUCIÓN COMPLETA!" : "¡MEGA EVOLUCIÓN!"}
            </p>
            <h2 className={clsx(
              "font-display text-base uppercase tracking-[0.15em] text-center transition-all duration-500",
              phase === "burst" && "text-white scale-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]",
              phase === "reveal" && "text-purple-200",
              phase === "charge" && "text-purple-300",
            )}>
              {phase === "reveal" ? pending.megaName : pending.fromName}
            </h2>
          </div>

          {/* Sprite area */}
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Spinning outer ring */}
            <div className={clsx(
              "absolute inset-0 rounded-full border-2 border-dashed transition-all duration-700",
              phase === "charge" && "border-purple-800/40 opacity-30",
              phase === "burst" && "border-purple-400/80 animate-spin scale-110",
              phase === "reveal" && "border-purple-500/40",
            )} style={phase === "burst" ? { animationDuration: "1s" } : undefined} />

            {/* Inner glow ring */}
            <div className={clsx(
              "absolute inset-4 rounded-full transition-all duration-500",
              phase === "burst" && "bg-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.6)]",
              phase === "reveal" && "bg-purple-600/10",
            )} />

            {/* Pokemon sprite */}
            <div className={clsx(
              "relative z-10 transition-all duration-300",
              phase === "charge" && "opacity-100",
              phase === "burst" && "animate-[megaBurstAnim_1.2s_ease-in-out_forwards]",
              phase === "reveal" && "animate-[megaRevealAnim_1s_cubic-bezier(0.34,1.56,0.64,1)_forwards]",
            )}>
              <PixelSprite
                pokemonId={phase === "reveal" ? pending.toId : (currentPokemon?.pokemonId ?? pending.fromId)}
                variant="front"
                size={160}
                shiny={currentPokemon?.isShiny}
                alt={phase === "reveal" ? pending.megaName : pending.fromName}
              />
            </div>

            {/* Energy particles during burst */}
            {phase === "burst" && (
              <>
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-300 rounded-full blur-[1px]"
                    style={{
                      top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 35}%`,
                      left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 35}%`,
                      animation: `particleFly 0.8s ease-out forwards ${i * 0.1}s`,
                    }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Status text */}
          <p className={clsx(
            "font-body text-[0.7rem] uppercase tracking-widest text-center transition-all duration-500 min-h-6",
            phase === "charge" && "text-purple-400",
            phase === "burst" && "text-white animate-pulse",
            phase === "reveal" && "text-purple-300",
          )}>
            {phase === "charge" && `¡La piedra de ${pending.fromName} reacciona!`}
            {phase === "burst" && "¡LA MEGA ENERGÍA EXPLOTA!"}
            {phase === "reveal" && `¡${pending.fromName} se ha convertido en ${pending.megaName}!`}
          </p>

          {/* Energy meter during charge */}
          {phase === "charge" && (
            <div className="w-full h-2 bg-black/40 border border-purple-900/50 overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-purple-700 to-purple-400 animate-[megaCharge_1.8s_ease-in_forwards]"
              />
            </div>
          )}

          {/* Reveal info panel */}
          {phase === "reveal" && (
            <div className="w-full bg-white/5 border border-purple-800/40 p-4 flex flex-col gap-2 animate-[in_fade-in_slide-in-from-bottom-2_duration-500]">
              <div className="flex items-center justify-between">
                <span className="font-display text-[0.5rem] text-muted tracking-widest uppercase">Forma base</span>
                <span className="font-display text-[0.6rem] text-white">{pending.fromName}</span>
              </div>
              <div className="h-px bg-purple-800/30" />
              <div className="flex items-center justify-between">
                <span className="font-display text-[0.5rem] text-muted tracking-widest uppercase">Mega forma</span>
                <span className="font-display text-[0.6rem] text-purple-300 font-bold">{pending.megaName}</span>
              </div>
              <div className="h-px bg-purple-800/30" />
              <p className="font-display text-[0.45rem] text-purple-500/70 tracking-widest text-center mt-1 uppercase">
                Se revertirá al terminar la batalla
              </p>
            </div>
          )}

          {/* Auto-close indicator */}
          {phase === "reveal" && (
            <p className="font-display text-[0.4rem] text-muted/50 tracking-widest uppercase animate-pulse">
              Cerrando automáticamente...
            </p>
          )}
        </div>

        {/* Bottom accent */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-purple-600/40 to-transparent" />
      </div>

      {/* Custom Animations using CSS because they use dynamic values or are complex */}
      <style>{`
        @keyframes megaBeam {
          0% { opacity: 0; transform: rotate(var(--r, 0deg)) translateY(-50%) scaleY(0); }
          40% { opacity: 1; }
          100% { opacity: 0; transform: rotate(var(--r, 0deg)) translateY(-50%) scaleY(1); }
        }
        @keyframes megaCharge {
          0% { width: 0%; }
          70% { width: 85%; }
          100% { width: 100%; }
        }
        @keyframes megaBurstAnim {
          0% { transform: scale(1); filter: brightness(1); }
          30% { transform: scale(0.8); filter: brightness(8) saturate(0); }
          60% { transform: scale(1.15); filter: brightness(6) hue-rotate(270deg); }
          100% { transform: scale(1); filter: brightness(3) saturate(2); }
        }
        @keyframes megaRevealAnim {
          0% { transform: scale(0.3) rotate(-15deg); filter: brightness(12) blur(8px) hue-rotate(270deg); opacity: 0; }
          50% { transform: scale(1.15) rotate(5deg); filter: brightness(4) blur(2px) hue-rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); filter: brightness(1) blur(0px) hue-rotate(0deg); opacity: 1; }
        }
        @keyframes particleFly {
          0% { transform: scale(1) translate(0, 0); opacity: 1; }
          100% { transform: scale(0) translate(var(--dx, 40px), var(--dy, -40px)); opacity: 0; }
        }
      `}</style>
    </div>,
    document.body,
  );
}
