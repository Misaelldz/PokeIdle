import type { ActivePokemon } from "../features/run/types/game.types";
import { generateUid } from "../utils/random";

/**
 * Calculates the average Base Stat Total (BST) of the current team.
 */
export function calculateTeamBST(team: ActivePokemon[]): number {
  if (team.length === 0) return 300; // fallback

  let totalBst = 0;
  for (const p of team) {
    if (p.baseStats) {
      const bst =
        p.baseStats.hp +
        p.baseStats.attack +
        p.baseStats.defense +
        p.baseStats.spAtk +
        p.baseStats.spDef +
        p.baseStats.speed;
      totalBst += bst;
    }
  }
  return Math.round(totalBst / team.length);
}

/**
 * Calculates the boss multiplier based on team's average BST vs the Gym's reference BST.
 * Returns a value between 0.70 and 1.50.
 */
export function getBossMultiplier(
  teamAverageBst: number,
  referenceBst: number,
): number {
  const ratio = teamAverageBst / referenceBst;
  return Math.max(0.7, Math.min(1.5, ratio));
}

/**
 * Generates Gym Leader's Pokémon applying the dynamic scaling rules.
 */
export function scaleGymPokemon(
  basePokemon: ActivePokemon,
  multiplier: number,
  isBoss: boolean,
): ActivePokemon {
  // 1. Scale IVs based on multiplier
  // round((Multiplicador - 0.70) / 0.80 * 31)
  const ivValue = Math.round(((multiplier - 0.7) / 0.8) * 31);
  const clampedIv = Math.max(0, Math.min(31, ivValue));

  const scaledIvs = {
    hp: clampedIv,
    attack: clampedIv,
    defense: clampedIv,
    spAtk: clampedIv,
    spDef: clampedIv,
    speed: clampedIv,
  };

  // 2. Resolve Nature based on multiplier
  let nature = "hardy"; // neutral
  if (multiplier >= 1.2) {
    // Determine if physical or special attacker
    if (basePokemon.baseStats.attack > basePokemon.baseStats.spAtk) {
      nature = "adamant";
    } else {
      nature = "modest";
    }
  }

  // 3. Apply Multiplier over Base Stats
  const scaledBaseStats = {
    hp: Math.round(basePokemon.baseStats.hp * multiplier),
    attack: Math.round(basePokemon.baseStats.attack * multiplier),
    defense: Math.round(basePokemon.baseStats.defense * multiplier),
    spAtk: Math.round(basePokemon.baseStats.spAtk * multiplier),
    spDef: Math.round(basePokemon.baseStats.spDef * multiplier),
    speed: Math.round(basePokemon.baseStats.speed * multiplier),
  };

  // 4. Recalculate final stats
  const calculateStat = (
    base: number,
    iv: number,
    ev: number,
    level: number,
    isHp: boolean,
    natureMultiplier: number = 1,
  ) => {
    if (isHp) {
      return (
        Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) +
        level +
        10
      );
    }
    return Math.floor(
      (Math.floor(((2 * base + iv + Math.floor(ev / 4)) * level) / 100) + 5) *
        natureMultiplier,
    );
  };

  const getNatureMultiplier = (stat: string, nat: string) => {
    if (nat === "adamant") {
      if (stat === "attack") return 1.1;
      if (stat === "spAtk") return 0.9;
    }
    if (nat === "modest") {
      if (stat === "spAtk") return 1.1;
      if (stat === "attack") return 0.9;
    }
    return 1.0;
  };

  const level = basePokemon.level;
  const evs = basePokemon.evs;

  const hp = calculateStat(
    scaledBaseStats.hp,
    scaledIvs.hp,
    evs.hp,
    level,
    true,
  );
  const attack = calculateStat(
    scaledBaseStats.attack,
    scaledIvs.attack,
    evs.attack,
    level,
    false,
    getNatureMultiplier("attack", nature),
  );
  const defense = calculateStat(
    scaledBaseStats.defense,
    scaledIvs.defense,
    evs.defense,
    level,
    false,
    getNatureMultiplier("defense", nature),
  );
  const spAtk = calculateStat(
    scaledBaseStats.spAtk,
    scaledIvs.spAtk,
    evs.spAtk,
    level,
    false,
    getNatureMultiplier("spAtk", nature),
  );
  const spDef = calculateStat(
    scaledBaseStats.spDef,
    scaledIvs.spDef,
    evs.spDef,
    level,
    false,
    getNatureMultiplier("spDef", nature),
  );
  const speed = calculateStat(
    scaledBaseStats.speed,
    scaledIvs.speed,
    evs.speed,
    level,
    false,
    getNatureMultiplier("speed", nature),
  );

  return {
    ...basePokemon,
    uid: basePokemon.uid || generateUid(),
    name: isBoss ? `BOSS ${basePokemon.name}` : basePokemon.name,
    nature,
    ivs: scaledIvs,
    maxHP: hp,
    currentHP: hp,
    stats: { hp, attack, defense, spAtk, spDef, speed },
  };
}
