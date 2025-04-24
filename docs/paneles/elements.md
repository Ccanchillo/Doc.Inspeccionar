---
sidebar_label: 'Elementos'
---

# Descripción del Panel de Elementos

El panel **Elementos** proporciona una interfaz sólida para inspeccionar y manipular el DOM. Puedes usar el árbol del DOM, que se asemeja a un documento HTML, para seleccionar nodos DOM específicos y modificarlos con otras herramientas.

El panel Elementos también tiene las siguientes pestañas que contienen herramientas relevantes:

- **Styles**

    - Ver y depurar las reglas de CSS aplicadas a un elemento de todas las hojas de estilo.  
    - Detectar CSS inválido, anulado o inactivo que no funciona según lo previsto.  
    - Para editar elementos agrega una declaración, aplica una clase y, luego, interactúa con el modelo de caja (box model).  
    - Accede a las opciones de edición de contenedores mediante las insignias en el árbol del DOM.

- **Computed**

    - Lista las propiedades CSS resueltas aplicadas a un elemento tal como Chrome las renderiza.

- **Layout**

    - Contiene opciones para modificar las superposiciones de **Grid** y **Flexbox**.

- **Event Listeners**

    - Muestra una lista de todos los _event listeners_ y sus atributos.  
    - Permite encontrar el origen de cada listener.  
    - Filtra listeners pasivos o de bloqueo.

- **DOM Breakpoints**

    - Lista los breakpoints de cambios en el DOM agregados desde el panel Elementos.  
    - Permite habilitarlos, deshabilitarlos, eliminarlos o saltar a ellos.

- **Properties**

    - Al seleccionar un nodo DOM, inspecciona y ordena las propiedades propias y heredadas del objeto JavaScript correspondiente.

- **Accessibility**

    - Muestra los elementos con etiquetas ARIA y sus propiedades.  
    - Permite activar/desactivar e inspeccionar el árbol de accesibilidad (experimental).


## Estructura del DOM

Al abrir el panel **Elements**, ves el **árbol DOM** de la página:  
- Cada nodo representa una etiqueta HTML (`<div>`, `<img>`, `<p>`, etc.)  
```html
<!-- Ejemplo sencillo -->
<html>
  <body>
    <div id="app">
      <h1>Hola</h1>
    </div>
  </body>
</html>
```
- La jerarquía refleja la anidación real en el documento  
- Al hacer clic en un nodo, se resalta ese elemento en la página  

**Por qué importa**:  
- Entiendes rápidamente la composición de la página  
- Localizas contenedores, scripts y estilos aplicados  
- Sirve de base para cualquier cambio o depuración

## Edición en vivo de HTML y CSS

En el panel **Elements** puedes modificar la página al instante:

1. **HTML**  
   - Haz doble clic sobre una etiqueta o texto para editarlo.  
   - Usa botón derecho → **Edit as HTML** para cambiar nodos completos.

2. **CSS**  
   - En la barra lateral **Styles**, edita propiedades o añade nuevas reglas.  
   - Prueba valores (colores, márgenes, fuentes) y observa el resultado inmediato.

**Ventajas**  
- Probar ajustes sin tocar archivos fuente.  
- Depurar estilos rotos al vuelo.  
- Previsualizar cambios antes de implementarlos en el código real. 



