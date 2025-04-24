---
sidebar_label: 'Memoria'
---

# Descripción del Panel de Memoria

El panel **Memory** te permite analizar cómo se está utilizando la memoria en tu aplicación web. Es clave para detectar fugas de memoria y optimizar el uso de recursos en páginas de larga duración o muy interactivas.

## Heap snapshots

- Captura el estado actual de la memoria (heap) en un momento determinado.
- Permite inspeccionar objetos, su tamaño y relaciones.
- Puedes comparar diferentes capturas para detectar objetos que no se están liberando adecuadamente.

## Instrumentación de asignación

- Graba las asignaciones de memoria en tiempo real durante la interacción con la página.
- Útil para identificar cuándo y dónde se crean nuevos objetos.
- Muestra qué funciones están generando más asignaciones.

## Detección de fugas de memoria

- Ayuda a encontrar objetos que permanecen en memoria cuando ya no deberían existir.
- Puedes detectar patrones de retención de objetos innecesarios.
- Ideal para aplicaciones SPA (Single Page Application) que mantienen mucho estado en memoria.


