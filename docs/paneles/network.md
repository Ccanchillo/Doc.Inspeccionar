---
sidebar_label: 'Red'
---

# Descripción del Panel de Red

El panel **Red** (Network) permite inspeccionar todas las solicitudes realizadas por la página: archivos HTML, CSS, JavaScript, imágenes, fuentes, API REST, entre otros. Es esencial para depurar problemas de carga y verificar el comportamiento de las peticiones.

## Monitorización de peticiones HTTP/HTTPS

- Muestra una lista en tiempo real de todas las solicitudes que realiza la página.
- Puedes ver detalles como método (GET, POST), estado (200, 404, etc.), tamaño de respuesta, encabezados, cuerpo de la respuesta y más.
- Útil para comprobar si una API está funcionando correctamente o si un recurso está fallando al cargar.

## Análisis de tiempos de carga y tamaños

- Puedes ver cuánto tarda cada solicitud en completarse, desde la conexión hasta la descarga.
- La pestaña **Timing** detalla el desglose del proceso: espera, conexión, respuesta, etc.
- Las columnas permiten ordenar por duración, tamaño, tipo de archivo, entre otros.

## Filtros y “throttling” de red

- Puedes filtrar solicitudes por tipo: JS, XHR, CSS, Img, Doc, etc.
- El botón **Disable cache** permite desactivar la caché para ver el comportamiento real de carga.
- La opción **Throttling** simula diferentes velocidades de conexión (3G, offline, etc.), útil para probar cómo se comporta tu sitio en redes lentas o inestables.
