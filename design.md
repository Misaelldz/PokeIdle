# PokéIdle — UI/UX Fixes Prompt for Antigravity

## Context
PokéIdle is a Rogue-lite/Idle game built with React 18 + TypeScript + Tailwind CSS.
The main game screen has 3 columns: left (region/team), center (battle arena), right (zone info + controls + log).
I need you to fix specific UX problems that make the interface unintuitive. Do NOT redesign everything — only fix the issues listed below. Keep the existing dark retro-gaming aesthetic.

---

## Fix #1 — Inventory / Mochila: Move it out of the topbar

**Problem:** The Mochila (Backpack) icon is hidden in the top-right corner of the header, next to the burger menu. The inventory is a critical, frequently-used game element and should be immediately visible, not buried in a navigation bar.

**Fix:** Remove the backpack icon from the topbar. Instead, add a persistent **Inventory bar** as a horizontal strip at the bottom of the RIGHT panel, above the Battle Log. It should display:
- Current Poké Ball count with icon (🔴 ×10)
- Current Super Ball count with icon (⚪ ×0)
- A "+ Mochila" button to open the full inventory modal

This way the player always sees their available balls without opening anything. The full inventory opens on click.

Also remove the redundant inventory line that currently appears inside the "Controles de Batalla" section (the one that says "Tienes 10 Poké Balls, 0 Super Balls").

---

## Fix #2 — Empty "Acceso Rápido" section: Hide it when empty

**Problem:** The "Acceso Rápido" block takes up permanent vertical space in the right panel even when it contains nothing. A section that says "No hay objetos anclados" is visual noise that pushes the Battle Log down.

**Fix:** Make the "Acceso Rápido" section **conditionally rendered**:
- If the player has 0 pinned items → hide the entire section completely (do not render it)
- If the player has ≥1 pinned item → show the section normally

When the section IS shown, display a small subtle "+ Anclar" hint at the end of the items grid, not as the main content.

---

## Fix #3 — "Avistamientos Salvajes": Show meaningful info or hide it

**Problem:** The Avistamientos Salvajes section shows two "???" silhouettes. This communicates nothing actionable and feels like placeholder content rather than a real game feature.

**Fix:** Two-state behavior:
- **Before any encounter in the zone:** Hide the section entirely OR show a single line of flavor text like `"Explora la zona para descubrir encuentros"` in muted monospace font, no silhouettes.
- **After at least one Pokémon has been encountered in this zone:** Reveal the silhouettes of known Pokémon (keep the mystery for undiscovered ones). Add a small label under each revealed silhouette showing the Pokémon name and type badge.

---

## Fix #4 — Team empty slots: Add a clear CTA

**Problem:** The empty team slots in the left panel are shown as faint "+" boxes with no explanation. A new player has no idea what these are or how to fill them.

**Fix:** When the team has fewer than 6 Pokémon, show a single small hint below the last filled slot:
```
"Captura Pokémon en batalla para completar tu equipo"
```
Use the muted monospace style. Only show it once, not once per empty slot. Remove the individual "+" placeholder boxes — replace them with nothing (just empty space), or a single compact row that shows `[slot] [slot] [slot]` as very subtle outlined squares without the "+" icon.

---

## Fix #5 — "Ver Loot de Zona" is too easy to miss

**Problem:** The zone loot link is tiny bracketed text `[VER LOOT DE ZONA]` that blends into the surrounding information. Loot is a core motivation loop in a roguelite — the player should always know what they're working toward.

**Fix:** Replace the tiny link with a small but proper button in the zone info block:
- Label: `VER LOOT`
- Style: outlined button (border only, no fill), small, same width as the zone progress bar
- Position: below the "X / Y BATALLAS" counter
- Keep it compact — it should not dominate, but it should be clearly clickable

---

## Technical Notes
- Stack: React 18 + TypeScript + Tailwind CSS
- State is managed via `GameContext.tsx` (Context API)
- Right panel components are likely in `/src/features/run/components/` or `/src/components/layout/`
- Do not modify `combat.engine.ts`, `xp.engine.ts`, or `useEngineTick.ts` — these are game logic files, not UI
- Changes should be purely presentational/conditional rendering, no game logic changes required
- Preserve all existing Tailwind class naming conventions in the codebase
- Do NOT change any sprite logic. The project uses an existing 3-level fallback system: Showdown GIF → Static PNG → Official Artwork. Keep all sprite components (`GachaSprite` and battle components) exactly as they are.