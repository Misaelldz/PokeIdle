# Mecánicas de Gimnasios — PokéIdle

Este documento define las mecánicas especiales de cada Gimnasio de Kanto y el sistema de escalado de dificultad de sus Líderes. Cada Gimnasio impone una condición de combate de tipo distinta, y su Líder escala en función del equipo del jugador.

---

## Estructura General de un Gimnasio

- **Entrenadores previos:** 2–3 combates normales antes del Líder.
- **Líder de Gimnasio:** Boss con stats, IVs y naturaleza escalados según el equipo del jugador (ver sección de Escalado).
- **Mecánica de Tipo:** Condición activa durante todo el Gimnasio, incluyendo los entrenadores previos.
- **Recompensa:** Medalla + objeto exclusivo + desbloqueo de tienda condicionado.

---

## Sistema de Escalado del Líder

### Fórmula

```
Multiplicador = clamp(PromedioBST_Equipo / BST_Referencia_Gimnasio, 0.70, 1.50)
Stat Final del Líder = Stat Base × Multiplicador
```

El multiplicador se calcula **una sola vez al iniciar el combate** contra el Líder. No cambia si el jugador pierde Pokémon durante la pelea.

### Escalado de IVs

```
IVs_Líder = round((Multiplicador - 0.70) / 0.80 × 31)
```

| Multiplicador | IVs resultantes |
|---|---|
| 0.70 (piso) | 0 |
| 1.00 (neutro) | 12 |
| 1.30 | 23 |
| 1.50 (techo) | 31 |

### Escalado de Naturaleza

| Multiplicador | Naturaleza |
|---|---|
| 0.70 – 0.89 | Neutral |
| 0.90 – 1.19 | Favorable menor (+10% stat ofensiva principal) |
| 1.20 – 1.50 | Favorable óptima (+10% ofensiva / -10% stat menos usada) |

### BST de Referencia por Gimnasio

Cada Gimnasio tiene un BST de referencia +20 sobre la zona que lo precede. Representa el BST promedio esperado si el jugador llegó con progresión normal.

| Gimnasio | BST Referencia | Zona previa (referencia) |
|---|---|---|
| Brock — Pewter City | 300 | Ruta 1 (280) |
| Misty — Cerulean City | 330 | Bosque Verde (310) |
| Lt. Surge — Vermilion | 360 | Monte Moon (340) |
| Erika — Celadon City | 400 | Ruta pre-Surge (380) |
| Koga — Fuchsia City | 440 | Zonas mid-game (420) |
| Sabrina — Saffron City | 460 | Post-Koga |
| Blaine — Cinnabar Island | 500 | Zonas late-game (480) |
| Giovanni — Viridian City | 520 | Liga Pokémon |

> Las barras de vida múltiples del Líder y sus boosts de Def/SpDef al romper cada barra usan el **stat ya escalado** como base, no el stat original.

---

## Gimnasios de Kanto

### 🪨 Gimnasio 1 — Pewter City · Tipo Roca · Líder: Brock
**BST Referencia: 300**

**Mecánica: Terreno Duro**
Los movimientos de tipo Normal y Lucha tienen su precisión reducida un 20%. Los movimientos de tipo Agua y Planta tienen su poder aumentado un 25%.

**Intención de diseño:** Tutorial de ventaja de tipo. Un Charmander inicial está en desventaja real aquí, pero el jugador aún no tiene muchas opciones — el Gimnasio enseña el concepto sin castigarlo demasiado.

---

### 💧 Gimnasio 2 — Cerulean City · Tipo Agua · Líder: Misty
**BST Referencia: 330**

**Mecánica: Lluvia Constante**
El clima está forzado a Lluvia durante todo el Gimnasio. Los movimientos de tipo Agua tienen poder ×1.5, los de Fuego tienen poder ×0.5. Los movimientos de tipo Rayo tienen precisión perfecta (100%).

**Intención de diseño:** Introduce el clima como variable de combate. Eléctrico como counter del Agua se vuelve conocimiento valioso para el resto del juego.

---

### ⚡ Gimnasio 3 — Vermilion City · Tipo Eléctrico · Líder: Lt. Surge
**BST Referencia: 360**

**Mecánica: Campo Electrificado**
Cualquier ataque de contacto tiene un 15% de probabilidad de paralizar al receptor, independientemente del tipo del movimiento. Los movimientos de tipo Tierra ignoran esta mecánica y tienen poder ×1.5.

**Intención de diseño:** La parálisis como amenaza pasiva constante. Tierra como counter se vuelve una decisión estratégica de equipo, no solo de tipo.

---

### 🌿 Gimnasio 4 — Celadon City · Tipo Planta · Líder: Erika
**BST Referencia: 400**

**Mecánica: Esporas en el Aire**
Al inicio de cada turno, cada Pokémon en combate tiene un 10% de probabilidad de quedarse dormido. Pokémon de tipo Veneno o Acero son inmunes. Usar un movimiento de tipo Fuego, Hielo o Veneno elimina la probabilidad de esporas ese turno (baja a 0%).

**Intención de diseño:** Estado Dormido como amenaza pasiva con counters claros. El jugador aprende a gestionar el moveset en función del entorno.

---

### ☠️ Gimnasio 5 — Fuchsia City · Tipo Veneno · Líder: Koga
**BST Referencia: 440**

**Mecánica: Niebla Tóxica**
Todos los Pokémon que no sean de tipo Veneno o Acero pierden 1/16 de su HP máximo al final de cada turno. Este efecto es ambiental — no puede curarse con objetos, solo desaparece al ganar el combate. Los Pokémon de tipo Veneno regeneran 1/16 de HP en su lugar.

**Intención de diseño:** Desgaste constante que presiona el inventario de pociones y el Auto-Curación. El jugador siente urgencia de terminar los combates rápido.

---

### 🔮 Gimnasio 6 — Saffron City · Tipo Psíquico · Líder: Sabrina
**BST Referencia: 460**

**Mecánica: Inversión de Estadísticas**
Los modificadores de estadísticas están invertidos. Subir una stat la baja, y viceversa. Aplica tanto al jugador como al rival. Los movimientos de daño directo sin efectos secundarios no se ven afectados.

**Intención de diseño:** El Gimnasio más disruptivo. Invalida estrategias de buff/debuff e impone el daño directo como camino principal. El jugador experimentado sufre más aquí que el que va simple.

---

### 🔥 Gimnasio 7 — Cinnabar Island · Tipo Fuego · Líder: Blaine
**BST Referencia: 500**

**Mecánica: Suelo Ardiente**
Todos los Pokémon que no sean de tipo Fuego, Roca o Tierra reciben Quemadura al entrar en combate por primera vez en el Gimnasio. Esta quemadura no puede curarse con objetos — solo desaparece al ganar el combate. Cambiar de Pokémon y volver a enviarlo lo quema nuevamente.

**Intención de diseño:** Quemadura garantizada e irremediable. El Auto-Curación y las pociones son críticos. El jugador con equipo variado sufre más que el que tiene tipos resistentes.

---

### 🌍 Gimnasio 8 — Viridian City · Tipo Tierra · Líder: Giovanni
**BST Referencia: 520**

**Mecánica: Gravedad Aumentada**
Los movimientos de tipo Volador pierden su efecto y todos los Pokémon son susceptibles a movimientos de tipo Tierra, incluyendo los que normalmente son inmunes. Los movimientos con prioridad positiva tienen su prioridad reducida a 0 — no pueden adelantarse.

**Intención de diseño:** El Gimnasio final elimina las dos ventajas más comunes contra Tierra: la inmunidad Volador y la velocidad con prioridad. El jugador enfrenta al último Líder sin sus atajos habituales.

---

## Notas de Implementación

- Las mecánicas de tipo se activan al entrar a la zona del Gimnasio, no solo al combate del Líder — los entrenadores previos también las aplican.
- El indicador de mecánica activa debe mostrarse en el panel derecho durante toda la estancia en el Gimnasio.
- Las mecánicas no se acumulan entre sí — al salir del Gimnasio todas las condiciones se eliminan.
- Los efectos de mecánica se aplican como modificadores de capa superior en `combat.engine.ts` sin modificar la lógica de clima/estado ya implementada.
- El multiplicador de captura del Líder (×0.5) no se ve afectado por el escalado — la dificultad de captura es independiente de la dificultad de combate.

---
