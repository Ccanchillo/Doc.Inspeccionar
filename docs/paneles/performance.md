---
sidebar_label: 'Rendimiento'
---

# Descripción del Panel de Rendimiento

El panel **Performance** es una herramienta avanzada que permite grabar y analizar cómo se comporta tu página durante su carga o interacción. Es fundamental para optimizar tiempos de respuesta y detectar problemas de rendimiento.

## Grabación de perfiles de carga

- Puedes iniciar una grabación para capturar lo que ocurre en el navegador durante un periodo específico.
- Se analizan acciones como la carga inicial, clics, scrolls o animaciones.
- Al detener la grabación, se genera un perfil detallado de actividades.

## Flame charts y análisis de “painting”

- El resultado de la grabación se presenta como un **flame chart**, que muestra visualmente cuánto tiempo toma cada proceso.
- Permite ver cuándo se ejecutan scripts, se renderiza contenido o se hace el repintado (painting) de la página.
- Útil para detectar procesos que bloquean el hilo principal.

## Identificación de cuellos de botella

- Puedes identificar funciones o tareas que tardan demasiado en ejecutarse.
- Detecta operaciones que afectan la fluidez, como redibujos innecesarios, largos tiempos de ejecución de JavaScript o uso excesivo del CPU.
- Proporciona recomendaciones para mejorar el rendimiento general de la aplicación.
