import {
  POKEMON_BY_TYPE,
  MEGA_EVOLUTION_POKEMON,
  ITEM_SPECIFIC_POKEMON,
} from "./pokemonDictionary";

// Re-export for backwards compatibility with items.ts
export { MEGA_EVOLUTION_POKEMON as MEGA_EVOLUTIONS, ITEM_SPECIFIC_POKEMON };

/** Check if team/PC contains at least one Pokémon of a given type */
export function hasPokemonOfType(
  state: { team: any[]; pc: any[] },
  type: string
): boolean {
  const roster = POKEMON_BY_TYPE[type.toLowerCase()] ?? [];
  const all = [...state.team, ...state.pc];
  return all.some((p) => roster.includes(p.name));
}

/** Check if team/PC contains a Pokémon matching any of the given names */
export function hasPokemonWithName(
  state: { team: any[]; pc: any[] },
  names: string[]
): boolean {
  const all = [...state.team, ...state.pc];
  return all.some((p) => names.includes(p.name));
}

/** Check if team/PC contains any Pokémon capable of Mega Evolution */
export function hasMegaEvolutionCandidate(
  state: { team: any[]; pc: any[] }
): boolean {
  return hasPokemonWithName(state, MEGA_EVOLUTION_POKEMON);
}