/**
 * src/lib/gacha.utils.ts
 *
 * Utilities for the Gacha system, including daily rotation.
 */

/**
 * Returns deterministic indices for a pool based on the current date (YYYY-MM-DD).
 * Ensures indices are unique within the count.
 */
export function getDailySeedIndices(poolSize: number, count: number): number[] {
  const now = new Date();
  const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  
  const indices: number[] = [];
  let attempt = 0;
  
  while (indices.length < Math.min(count, poolSize) && attempt < 100) {
    // Simple hash with unique salt for each index
    const seed = dateString + `-${attempt}`;
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
       const char = seed.charCodeAt(i);
       hash = (hash << 5) - hash + char;
       hash |= 0;
    }
    
    const idx = Math.abs(hash) % poolSize;
    if (!indices.includes(idx)) {
      indices.push(idx);
    }
    attempt++;
  }
  
  return indices;
}

/**
 * Returns N unique legendary IDs for the current day from the given pool.
 */
export function getDailyLegendaries(pool: number[] | ReadonlyArray<number>, count: number = 3): number[] {
  if (pool.length === 0) return [];
  const indices = getDailySeedIndices(pool.length, count);
  return indices.map(idx => pool[idx]);
}

/**
 * Legacy support for single legendary.
 */
export function getDailyLegendary(pool: number[] | ReadonlyArray<number>): number {
  const ids = getDailyLegendaries(pool, 1);
  return ids.length > 0 ? ids[0] : 0;
}
