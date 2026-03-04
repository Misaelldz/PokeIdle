import React from "react";
import { clsx } from "clsx";

const CATEGORY_COLORS: Record<string, string> = {
  physical: "#FF4422",
  special: "#6699FF",
  status: "#999999",
};

const CATEGORY_LABELS: Record<string, string> = {
  physical: "FÍSICO",
  special: "ESPECIAL",
  status: "ESTADO",
};

interface MoveCategoryBadgeProps {
  category: string;
  size?: "xs" | "sm" | "md";
  className?: string;
}

export function MoveCategoryBadge({
  category,
  size = "sm",
  className,
}: MoveCategoryBadgeProps) {
  const cat = category.toLowerCase();
  const color = CATEGORY_COLORS[cat] || "#777";
  const label = CATEGORY_LABELS[cat] || category.toUpperCase();

  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center rounded px-1.5 py-0.5 text-white font-bold uppercase shadow-sm border border-white/20",
        size === "xs"
          ? "text-[8px] leading-none px-1 py-0"
          : size === "sm"
            ? "text-[10px]"
            : "text-xs",
        className,
      )}
      style={{
        backgroundColor: color,
        textShadow: "0px 1px 2px rgba(0,0,0,0.5)",
      }}
    >
      {label}
    </div>
  );
}
