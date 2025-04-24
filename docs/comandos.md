---
sidebar_label: 'Comandos'
---

# Descripción del Menú de Comandos

El **menú de comandos** proporciona una forma rápida de navegar por la interfaz de usuario de las Herramientas para desarrolladores de Chrome y realizar tareas comunes, como **inhabilitar JavaScript**.

Es posible que conozcas una función similar en **Visual Studio Code**, llamada **Paleta de comandos**, que fue la inspiración original del menú de comandos en Chrome DevTools.

---

## ¿Cómo acceder?

Puedes abrir el Menú de Comandos con el atajo:

 - En Windows: `Ctrl + Shift + P` 
 - En macOS: `Cmd + Shift + P`

---

## ¿Qué puedes hacer con él?

Al abrir el menú, aparecerá una barra de búsqueda donde puedes escribir palabras clave o comandos. Algunos ejemplos:

- **"Mostrar reglas de CSS"** – para ver estilos aplicados.
- **"Deshabilitar JavaScript"** – para probar cómo se comporta una página sin JS.
- **"Recargar con caché deshabilitado"** – útil para pruebas de recursos.
- **"Tomar captura de pantalla de nodo"** – genera una imagen del elemento seleccionado.

### Ventajas

✅ Rápido acceso a funciones avanzadas  
✅ Evita usar el mouse constantemente  
✅ Ideal para usuarios que dominan atajos de teclado  
✅ Aumenta tu productividad como desarrollador web

### Consejos

- Usa términos como `>show` (mostrar), `>disable` (deshabilitar), `>capture` (capturar), `>inspect` (inspeccionar) para encontrar funciones rápidamente.
- ¡Explora! Muchos comandos ocultos están disponibles que no verás en los menús normales.

> ¡El Menú de Comandos te ayuda a ser más ágil y eficiente mientras inspeccionas y depuras páginas web!
---

## Mostrar reglas

Con las reglas que se encuentran arriba y a la izquierda del viewport, puedes medir el ancho y la altura de un elemento cuando colocas el cursor sobre él en el panel **Elementos**.

**Habilita la regla con una de las siguientes maneras:**

1. Presiona `Ctrl + Shift + P` o `Cmd + Shift + P` (Mac) para abrir el menú de comandos, escribe `Show rulers on hover` y presiona Enter.  
2. Ve a **Configuración > Preferencias > Elements** y activa **Show rulers on hover**.

> La unidad de medida de la regla es **Píxel**.

---

## Comandos útiles del Menú de Comandos

El Menú de Comandos de Chrome DevTools ofrece accesos rápidos a funciones potentes que pueden ayudarte a inspeccionar, depurar y mejorar el rendimiento de tu sitio. Aquí tienes una selección de los más interesantes:

### 📏 Diseño y visualización

- `Show rulers on hover` (Mostrar reglas al pasar el cursor)  
  Activa reglas horizontales y verticales para medir píxeles visualmente.

- `Show element tooltips` (Mostrar información sobre herramientas del elemento)  
  Muestra datos como el nombre de clase, tamaño y más al pasar el cursor.

- `Toggle element state` (Alternar estado del elemento)  
  Cambia el estado de un elemento (`:hover`, `:focus`, `:active`) para ver los estilos aplicados.

- `Toggle device toolbar` (Alternar barra de dispositivos)  
  Activa o desactiva el modo de vista responsiva para simular diferentes dispositivos.

- `Capture screenshot` (Capturar captura de pantalla)  
  Captura toda la pantalla del viewport actual.

- `Capture node screenshot` (Capturar nodo)  
  Toma una captura de pantalla del elemento seleccionado en el DOM.

---

### ⚙️ Depuración y pruebas

- `Disable JavaScript` (Deshabilitar JavaScript)  
  Muy útil para probar la accesibilidad o el comportamiento de la página sin scripts.

- `Enable JavaScript` (Habilitar JavaScript)  
  Vuelve a activar JavaScript si lo desactivaste anteriormente.

- `Show console drawer` (Mostrar consola)  
  Abre el panel inferior con acceso a la consola, red, rendimiento, etc.

- `Clear console` (Limpiar consola)  
  Borra todos los mensajes registrados en el panel de consola.

- `Start performance profiling` (Iniciar perfilado de rendimiento)  
  Comienza a registrar la actividad de la página para analizar el rendimiento.

---

### 🔍 Exploración y análisis

- `Search across all sources` (Buscar en todas las fuentes)  
  Realiza búsquedas en todos los archivos JavaScript y HTML de la aplicación.

- `Show accessibility properties` (Mostrar propiedades de accesibilidad)  
  Muestra cómo la página será interpretada por tecnologías asistidas como lectores de pantalla.

- `Show paint flashing` (Mostrar parpadeo de renderizado)  
  Destaca las áreas de la página que se están repintando, útil para identificar problemas de rendimiento.

- `Show layout shift regions` (Mostrar áreas de cambio de diseño)  
  Indica qué elementos están causando cambios visuales inesperados (Layout Shift).

---

> 💡 Puedes acceder a todos estos comandos presionando `Ctrl + Shift + P` (o `Cmd + Shift + P` en Mac) y escribiendo el nombre del comando.
