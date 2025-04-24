---
sidebar_label: 'Visión General'
---

# Visión General del Panel de Desarrollo (DevTools)

Antes de sumergirnos en cada sección, esta visión general te dará el panorama completo de lo que encontrarás en DevTools. Aquí entenderás cómo está organizado el espacio de trabajo, qué elementos forman parte de la interfaz y cómo moverte con agilidad entre sus distintas áreas.

En las siguientes subsecciones descubrirás:

- [**Paneles Principales:**](#paneles-principales) los módulos clave (Elements, Console, Network, Sources, etc.) donde ocurre la magia de la inspección y depuración.  
- [**Barra de Navegación Interna:**](#barra-de-navegación-interna) las pestañas secundarias dentro de cada panel que te permiten profundizar en detalles específicos, como estilos computados o cabeceras de red.  
- [**Personalización – Disposición:**](#personalización---disposición) cómo adaptar la posición, apariencia y componentes de DevTools para que encajen a la perfección con tu forma de trabajar.

Con esta introducción sabrás qué esperar y cómo orientarte antes de explorar cada herramienta en detalle.

## Paneles Principales

Estos son los módulos más usados, accesibles desde la parte superior del panel DevTools:

- [**Elementos**](paneles/elements): inspecciona y edita el HTML/CSS en vivo.
- [**Consola**](paneles/console): revisa errores, warnings y ejecuta JS al vuelo.
- [**Red**](paneles/network): monitoriza peticiones HTTP, tiempos de carga y tamaños.
- [**Fuentes**](paneles/sources): depura JavaScript con breakpoints y explora archivos fuente.
- [**Rendimiento**](paneles/performance): graba y muestra un timeline para encontrar cuellos de botella.
- [**Memoria**](paneles/memory): toma snapshots de memoria para detectar fugas.
- [**Aplicación**](paneles/applicaton): gestiona almacenamiento (LocalStorage, IndexedDB, cookies) y PWA.
- [**Lighthouse**](paneles/lighthouse): realiza auditorías de performance, accesibilidad y SEO con sugerencias.

> Estos paneles funcionan como **“aplicaciones dentro de la aplicación”**: Desplázate entre ellos según tu requerimiento.

---

## Barra de Navegación Interna

Dentro de cada panel, encontrarás pestañas secundarias que te permiten profundizar:

- En [**Elementos**](paneles/elements):  
  - **Styles**, **Computed**, **Layout**, **Event Listeners**, **DOM Breakpoints**, **Accessibility**.  

- En [**Consola**](paneles/console):  
  - **Errors**, **Warnings**, **Logs**, **Command Line**.  

- En [**Red**](paneles/network):  
  - **Headers**, **Preview**, **Response**, **Timing**.  

- En [**Fuentes**](paneles/sources):  
  - **Watch**, **Call Stack**, **Scope**, **Breakpoints**.  

- En [**Rendimiento**](paneles/performance):  
  - **Summary**, **Bottom-Up**, **Call Tree**, **Flame Chart**.  

- En [**Memoria**](paneles/memory):  
  - **Heap Snapshot**, **Allocation Instrumentation**, **Allocation Timeline**.  

- En [**Aplicación**](paneles/applicaton):  
  - **Application** , **Storage**, **Background**, **Frames**.  

- En [**Lighthouse**](paneles/lighthouse):  
  - **Performance**, **Accessibility**, **Best Practices**, **SEO**, **PWA**.  

> Piensa en la navegación interna como el GPS de cada panel: te lleva al dato exacto que buscas.

---

## Personalización - Disposición

Ajusta DevTools a tu estilo de trabajo:

1. **Posición del panel**  
   - Abajo, a la derecha, a la izquierda o ventana separada.  
   - Menú ⋮ → **Dock side** → elige ubicación.

2. **Selección de pestañas**  
   - Clic derecho sobre la fila de paneles principales → marca/desmarca lo que quieras ver.  
   - Oculta lo que no uses para no distraerte.

3. **Tema y tipografía**  
   - Menú ⋮ → **Settings** → **Appearance**: claro/oscuro, tamaño de fuente.  
   - Ajusta fuente monoespaciada para tu comodidad visual.

4. **Workspaces**  
   - Vincula carpetas locales para editar CSS/JS y guardar cambios directos.  
   - Menú ⋮ → **Settings** → **Workspace** → añade directorio.

5. **Panel Drawer**  
   - Activa el “cajón” inferior (Console Drawer) con `Esc`.  
   - Cambia rápidamente entre consola, cambios de cobertura (Coverage), accesibilidad (Accessibility), etc.

> Con estos ajustes, DevTools deja de ser una herramienta genérica y se convierte en tu “oficina” personalizada para depurar y optimizar páginas web.  
