# JS-10-Objetos-globales

Este proyecto contiene ejemplos prácticos sobre objetos globales en JavaScript. A continuación se describe la funcionalidad de cada archivo dentro de la carpeta [`js/`](js):

Vamos a manejar:

- window.location
- navigator
- screen

## Archivos de la carpeta `js`

- [`01-app.js`](js/01-app.js):  
  Muestra información sobre el objeto global `window` y su propiedad `location`. Utiliza `alert` y `console.log` para mostrar datos relevantes.

- [`02-app.js`](js/02-app.js):  
  Muestra la URL actual usando `location.href` y permite navegar a otra página haciendo clic en una imagen. Añade dinámicamente contenido HTML al elemento con id `leccion`.

- [`03-app.js`](js/03-app.js):  
  Muestra todas las propiedades del objeto `navigator` y el `userAgent` del navegador. Incluye comentarios para mostrar páginas diferentes según el sistema operativo o idioma del navegador.

- [`04-app.js`](js/04-app.js):  
  Muestra todas las propiedades del objeto `screen` en el elemento con id `leccion`.

- [`05-app.js`](js/05-app.js):  
  Escucha el evento de redimensionamiento de la ventana (`resize`) y muestra el tamaño actual (`innerHeight` y `innerWidth`) en el elemento `leccion`.

- [`05-app_01.js`](js/05-app_01.js):  
  Similar a `05-app.js`, pero además cambia el color de fondo del elemento `leccion` a amarillo si el ancho de la ventana es menor o igual a 500px, y a blanco si es mayor.

- [`06-app.js`](js/06-app.js):  
  Escucha el evento `resize` y muestra el tamaño actual del elemento `leccion` (alto y ancho). Si el ancho supera los 500px, limita el ancho máximo del elemento a 400px.

---

Cada archivo está pensado para ser activado individualmente desde el archivo [`index.html`](index.html) descomentando la línea correspondiente del `<script>`.

---

## Sugerencias de ejercicios

1. **Redirección automática:**  
   Modifica uno de los ejemplos para que, si el usuario está usando un navegador específico (por ejemplo, Chrome), sea redirigido automáticamente a otra página.

2. **Mostrar información del dispositivo:**  
   Crea una función que muestre en pantalla el idioma del navegador, el sistema operativo y la resolución de pantalla.

3. **Detectar modo móvil/escritorio:**  
   Utiliza las propiedades de `navigator` y `screen` para mostrar un mensaje diferente si el usuario está en un dispositivo móvil o en un ordenador.

4. **Cambiar estilos según el tamaño de la ventana:**  
   Añade lógica para cambiar el color de fondo o el tamaño de fuente del contenido según el ancho de la ventana.

5. **Crear un historial de redimensionamientos:**  
   Guarda en un array los tamaños de ventana cada vez que se redimensiona y muéstralos en pantalla.

## Información interesante

- El objeto `window` es el objeto global en el navegador y contiene propiedades y métodos para controlar la ventana del navegador.
- `window.location` permite obtener y modificar la URL actual, recargar la página o redirigir a otra.
- `navigator` proporciona información sobre el navegador y el sistema operativo del usuario.
- `screen` da acceso a las propiedades de la pantalla del dispositivo, como la resolución.
- Los eventos como `resize` permiten reaccionar a cambios en el tamaño de la ventana, útiles para crear interfaces responsivas.

Mas info en [guia rapida]('https://github.com/albertomozo/HTML-guias/blob/main/guias/JS/js__navigator_screen_location.md')
