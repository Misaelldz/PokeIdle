# PokéIdle — Project Summary (Handoff)

Este documento es una guía técnica exhaustiva diseñada para transferir el contexto completo del proyecto a otro modelo de IA. Contiene la arquitectura, lógica de negocio y estructuras de datos fundamentales de PokéIdle.

## 1. Visión General

PokéIdle es un juego tipo Rogue-lite / Idle basado en el universo Pokémon. El jugador progresa a través de regiones y zonas, captura Pokémon, gestiona un equipo de 6 y se enfrenta a Jefes de Zona y Gimnasios. El juego combina combate por turnos (manual o automático) con una progresión persistente basada en la genética de los Pokémon capturados.

## 2. Pila Tecnológica

- **Framework**: React 18+ con Vite.
- **Lenguaje**: TypeScript (Tipado estricto para lógica de batalla).
- **Estado Global**: React Context API (`GameContext.tsx`).
- **Persistancia**: LocalStorage + Supabase (Cloud Sync).
- **Estilos**: Tailwind CSS.
- **Datos**: Integración con PokéAPI v2 (Evoluciones, Movimientos, Stats).
- **Assets**: Sprite Registry local para optimización de carga y fallbacks dinámicos.

## 3. Arquitectura del Estado (`GameContext`)

El estado se divide en tres ramas principales:

- **`run` (RunState)**: Estado de la partida actual (equipo, PC, zona, batalla activa, objetos). Se resetea al perder o terminar la run.
- **`meta` (MetaState)**: Progreso persistente (Shiny desbloqueados, mejores IVs por especie, monedas, historial de runs).
- **`training` (TrainingState)**: Estado del modo "Entrenamiento Infinito".

### Estructuras de Datos Clave

- **`ActivePokemon`**: Objeto complejo que incluye `uid`, `baseStats`, `ivs` (0-31), `evs`, `nature`, `moves` (ActiveMove[]), `status`, `statModifiers` y `heldItem`.
- **`BattleState`**: Controla la fase del combate, el log, los Pokémon involucrados y la cola de acciones manuales.

## 4. Motores de Lógica (`/src/engine`)

- **Combat Engine (`combat.engine.ts`)**:
  - `calculateDamage`: Implementa la fórmula oficial de Gen 5+.
  - `determineAttackOrder`: Decide quién mueve primero basándose en **Prioridad del Movimiento** y **Velocidad del Pokémon**.
  - `applyDamage`: Maneja la reducción de HP y triggers como la "Banda Focus".
- **XP Engine (`xp.engine.ts`)**: Maneja el escalado de niveles, el Repartir Experiencia (20% a la banca por defecto) y multiplicadores de cartas.
- **Capture Engine (`capture.engine.ts`)**: Implementa el ratio de captura de Gen 3/4 basado en HP actual, Max HP, Modificador de Ball y Status.

## 5. El Bucle de Juego (`useEngineTick.ts`)

Es el corazón del juego. Se ejecuta mediante un hook que procesa:

1.  **Exploración**: Progreso de la zona hasta encontrar un encuentro o Jefe.
2.  **Auto-Items**: Uso automático de pociones basado en un umbral de HP configurable.
3.  **Combate**:
    - En **Modo Idle**, elige el mejor movimiento automáticamente.
    - En **Modo Manual**, espera a que `manualActionQueue` tenga una entrada.
    - Ejecuta la secuencia de turnos secuencialmente.
    - Procesa efectos de fin de turno (Quemaduras, Veneno).
    - Maneja la transición de fases en Jefes (Múltiples barras de vida + Boosts de stats).

## 6. Detalles de Implementación Críticos

- **Bosses**: Tienen IVs perfectos (31), naturalezas favorables y un multiplicador de captura de 0.5x. Al romper una barra de vida, ganan +1 en Def/SpDef.
- **Evoluciones**: Son asíncronas. El sistema valida con la API de PokéAPI si se cumplen los requisitos al subir de nivel.
- **Sprites**: `GachaSprite` y componentes de batalla usan un sistema de fallback de 3 niveles: Showdown GIF -> Static PNG -> Official Artwork.

## 7. Directo al Grano para la IA

Si vas a modificar el combate, edita `useEngineTick.ts` (flujo) y `combat.engine.ts` (fórmulas). Para cambios en la UI, la mayoría de los componentes están en `/src/features/run/components` o `/src/components/layout`. La persistencia se maneja automáticamente por el `useEffect` en `GameContext`.
