# Posibles Mejoras y Futuras Funcionalidades

Con la asombrosa expansión del sistema de objetos (`items.ts`) y la creación de los diccionarios y filtros de Pokémon (`pokemonDictionary.ts`, `pokemonFilters.ts`), las bases del juego se han vuelto sumamente robustas. Aquí hay una lista de funcionalidades que se podrían implementar en el futuro para aprovechar al máximo esta nueva arquitectura:

## 1. Sistema de Inventario y Bolsa (Bag)

- **Mejora Interfaz:** Crear una vista de "Bolsa" dividida por categorías (Poké Balls, Medicinas, Bayas, Objetos de Batalla, Objetos Clave).
- **Gestión de Espacio:** Posibilidad de ordenar, filtrar o asignar objetos favoritos para acceso rápido.

## 2. Uso Activo de Objetos en Combate

- **Modo Manual Ampliado:** En combates manuales o contra Jefes, añadir un botón de "Bolsa" que pause momentáneamente el combate para permitir el uso estratégico de:
  - **Medicinas:** Pociones, Restaurar Todo, Revivir.
  - **Poké Balls:** Permitir al jugador elegir qué tipo de Ball lanzar, calculando el ratio de captura basado en la Ball elegida (Ej. Ocaso Ball de noche, Malla Ball contra tipo Agua).
  - **Objetos de Batalla (Stats):** Uso de Ataque X, Defensa X, etc., que duran hasta el fin del combate.

## 3. Sistema de Megaevolución Dinámica

- **Botón de Megaevolución:** Si el jugador posee el "Mega-Brazalete" (objeto clave) y el Pokémon activo lleva equipada su respectiva Mega Piedra (Ej. Venusaurita), habilitar un botón especial que cambie las estadísticas, tipo y sprite del Pokémon durante ese combate.

## 4. Efectos Intrínsecos de las Bayas

- **Consumo Automático:** Integrar un sistema donde los Pokémon que lleven equipada una Baya (Ej. Baya Zidra, Baya Ziuela) la consuman de forma automática durante el combate según el _trigger_ correspondiente (bajar del 50% de HP o recibir un problema de estado).

## 5. Crianza y Objetos de Incienso

- **Guardería Pokémon:** Implementar un sistema de crianza. Aprovechando los inciensos añadidos, se podría requerir que los padres lleven equipado el incienso correspondiente para que el huevo eclosione en formas como Munchlax o Wynaut en lugar de Snorlax o Wobbuffet.

## 6. Lógica Específica para Objetos Sostenidos Complejos

- Integrar la validación y el bucle lógico en el motor (`useEngineTick`) para los objetos competitivos más complejos, como:
  - **Mineral Evolutivo (Eviolite):** Aumentar defensas solo si el Pokémon base tiene evoluciones pendientes.
  - **Restos (Leftovers) / Lodo Negro:** Curación / daño progresivo al final del turno.
  - **Objetos Elección (Choice Band, Specs, Scarf):** Bloquear el uso de movimientos a uno solo, a cambio de un enorme _boost_ de estadísticas.
  - **Banda Focus (Focus Sash):** Evitar el KO garantizando 1 HP ante ataques letales.

## 7. Criterios de Aparición en Tienda y Botín

- **Misiones o Progresión de Gimnasio:** Hacer que los objetos dependan no solo de tener un Pokémon del tipo adecuado (`buyable` dinámico), sino de haber derrotado a un líder de gimnasio específico (Ej: Las Ultra Balls solo aparecen en la tienda después del 4.º gimnasio).

## 8. Sistema de Formas Alternas

- Incorporar soportes para cambios de forma en batalla o permanentes (Palkia con Lustresfera, Rotom con electrodomésticos, Ogerpon con Máscaras). El diccionario actual ya soporta diferenciar estas especificaciones.
