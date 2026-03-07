import React from "react";

interface Props {
  currentHP: number;
  maxHP: number;
  showText?: boolean;
  barColor?: string;
  statModifiers?: {
    atk: number;
    def: number;
    spa: number;
    spd: number;
    spe: number;
    acc: number;
    eva: number;
    crit: number;
  };
}

export function HPBar({
  currentHP,
  maxHP,
  showText = true,
  barColor,
  statModifiers,
}: Props) {
  const percent = Math.max(0, Math.min(100, (currentHP / maxHP) * 100));

  let colorClass = barColor || "bg-hp";
  if (!barColor) {
    if (percent <= 20) colorClass = "bg-hp-critical";
    else if (percent <= 50) colorClass = "bg-hp-low";
  }

  const activeModifiers = statModifiers
    ? Object.entries(statModifiers).filter(([_, val]) => val !== 0)
    : [];

  return (
    <div className="w-full flex flex-col relative">
      <div
        className="w-full h-3 bg-surface-dark border-2 border-border shadow-inner overflow-hidden relative"
        role="progressbar"
        aria-valuenow={currentHP}
        aria-valuemin={0}
        aria-valuemax={maxHP}
        aria-label={`HP: ${Math.floor(currentHP)}/${maxHP}`}
      >
        <div
          className={`h-full transition-all duration-300 motion-reduce:transition-none ${colorClass} shadow-[0_0_8px_rgba(255,255,255,0.2)]`}
          style={{ width: `${percent}%` }}
        >
          <div className="absolute inset-0 bg-white/20 h-[30%] opacity-50"></div>
        </div>
      </div>

      {activeModifiers.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-1">
          {activeModifiers.map(([stat, val]) => {
            const isPositive = val > 0;
            const color = isPositive ? "bg-brand" : "bg-danger";
            return (
              <div
                key={stat}
                className={`${color} text-[0.45rem] font-display text-white px-1 py-0.5 border border-white/20 shadow-sm flex items-center gap-0.5 animate-in fade-in zoom-in duration-300`}
              >
                <span className="uppercase opacity-80">{stat}</span>
                <span className="font-bold">
                  {isPositive ? `+${val}` : val}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {showText && (
        <div className="text-[0.6rem] text-right font-display text-white w-full mt-1 drop-shadow-sm uppercase tracking-tighter">
          {Math.floor(currentHP)} / {maxHP} PS
        </div>
      )}
    </div>
  );
}
