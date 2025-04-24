---
sidebar_label: 'Aplicación'
---

# Descripción del Panel de Aplicación

El panel **Application** permite inspeccionar y gestionar los recursos de almacenamiento de una página web, así como revisar el estado de la PWA (Progressive Web App), sus manifiestos y el comportamiento offline.

## Almacenamiento local (LocalStorage, SessionStorage)

- **LocalStorage** y **SessionStorage** permiten guardar datos clave-valor directamente en el navegador.
- Son útiles para guardar configuraciones del usuario, tokens, preferencias, etc.
- Puedes ver, editar, agregar o eliminar estos datos desde el panel.

## IndexedDB y Web SQL

- **IndexedDB** es una base de datos orientada a objetos para almacenar grandes cantidades de datos estructurados.
- El panel permite explorar las bases de datos, sus tablas y registros.
- **Web SQL** está obsoleto, pero aún es visible si una página lo utiliza.

## Cookies y cache del navegador

- Muestra todas las cookies activas de la página, sus valores, fechas de expiración y flags como `HttpOnly` o `Secure`.
- Puedes modificarlas o eliminarlas manualmente.
- También permite revisar el contenido del **Cache Storage** y del **Service Worker**, fundamentales en apps PWA para trabajar sin conexión.
