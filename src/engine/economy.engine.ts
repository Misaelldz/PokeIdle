import type { BattleState } from "../features/run/types/game.types";

/**
 * Calculates money reward after a battle victory.
 */
export function calculateMoneyGain(
  enemyLevel: number,
  battleType: BattleState["type"],
  isBoss: boolean = false
): number {
  let base = enemyLevel * 10;
  
  if (isBoss) {
    base *= 5;
  } else if (battleType === "trainer") {
    base *= 2.5;
  } else if (battleType === "gym") {
    base *= 10;
  } else if (battleType === "elite") {
    base *= 20;
  }
  
  // Add some randomness +/- 10%
  const randomFactor = 0.9 + Math.random() * 0.2;
  return Math.floor(base * randomFactor);
}
