---
sidebar_label: 'Consola'
---

# Descripción del Panel de Consola

El panel **Console** es tu consola interactiva para depurar y probar código JavaScript, así como para inspeccionar mensajes que el navegador y tu aplicación generan.

## Ejecución de JavaScript en tiempo real

- Puedes escribir cualquier expresión o fragmento de JavaScript y pulsar Enter para ejecutarlo al instante.  
- Ideal para probar funciones, evaluar variables o manipular el DOM sin recargar la página.  

```js
// Ejemplo:
document.querySelector('h1').textContent = '¡Hola desde la consola!';
```

## Mensajes de Error, Advertencia e Información

La consola muestra diferentes tipos de mensajes generados por el navegador o el código de tu aplicación. Estos mensajes se clasifican por colores y tipo:

- 🔴 **Errores**: Indican fallos en la ejecución del código JavaScript, como `SyntaxError` o `ReferenceError`.  
- 🟡 **Advertencias**: Señalan prácticas desaconsejadas, APIs obsoletas o posibles problemas futuros.  
- 🔵 **Información / Logs**: Incluyen salidas de `console.log()`, `console.info()` o `console.debug()` para propósitos de depuración.  

**Cada mensaje en la consola incluye:**

- Una descripción del evento.
- Un enlace al archivo fuente y número de línea desde donde se originó el mensaje.
- Opciones para copiar, ignorar o abrir directamente en el editor del panel [**Fuentes**](\docs\paneles\sources.md).

> Esta categorización permite detectar y resolver problemas de forma más precisa y rápida durante el desarrollo.

## Uso de comandos útiles

El panel **Console** permite usar comandos especiales que simplifican la inspección y manipulación del DOM o eventos:

- **`$0`, `$1`, ...**

  Referencias rápidas a los últimos elementos seleccionados en el panel **Elementos**.  
  ```js
  $0.style.border = '2px solid red';
  ```

- **`$$('selector')`**
  
  Equivalente a `document.querySelectorAll`. Retorna una lista de nodos que coinciden con el selector.
    ```js
    $$('.boton').forEach(b => b.remove());
    ```
- **`monitorEvents(obj, tipo)`**

  Muestra en la consola los eventos del tipo especificado que ocurren sobre el objeto indicado.
  ```js
  monitorEvents(window, 'click');
  ```

- **`clear()`**

  Limpia la consola de todos los mensajes actuales.
  ```js
  clear();
  ```

- **`copy(obj)`**

  Copia al portapapeles el contenido (normalmente en formato JSON) de un objeto.
  ```js
  copy({ nombre: "DevTools", tipo: "Herramienta" });
  ```

> Estos comandos hacen que el trabajo con DevTools sea mucho más rápido, especialmente al depurar elementos dinámicos o interactuar con eventos en tiempo real.
