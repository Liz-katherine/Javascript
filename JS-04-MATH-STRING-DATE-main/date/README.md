# Ejemplos de uso de Date en JavaScript

Esta carpeta contiene ejemplos prácticos sobre el manejo de fechas y horas en JavaScript utilizando el objeto `Date`. Puedes ver cada ejemplo cambiando el script que se carga en el archivo [index.html](index.html), lo que permite visualizar distintas funcionalidades y métodos.

## Versiones disponibles en `index.html`

En [index.html](index.html) puedes activar una de las siguientes versiones descomentando la línea correspondiente al script:

- **01-app.js**  
  Muestra la fecha y hora actual, y ejemplos de métodos básicos de `Date`.

- **02-app.js**  
  Ejemplo de uso de timestamp (`Date.now()`), cálculo de fechas futuras sumando milisegundos y visualización de resultados.

- **03-app.js**  
  Uso de `setTimeout` para mostrar un mensaje después de 5 segundos.

- **04-app.js**  
  Uso de `setInterval` para mostrar un mensaje repetidamente cada 5 segundos.

- **05-app.js**  
  Ejemplo de reloj en tiempo real usando `setInterval`, con botón para detener el reloj.

- **06-app.js**  
  Reloj en tiempo real con botón para pausar y reanudar el reloj.

Para probar cada versión, edita [index.html](index.html) y descomenta la línea del script correspondiente (por ejemplo, `<script src="js/01-app.js"></script>`).

## Explicación de los otros ficheros de la carpeta raíz

- **01_fecha.html**  
  Muestra la fecha y la hora actual utilizando el objeto `Date`, formateando los minutos y segundos para que siempre tengan dos dígitos.

- **02_nombredelmes.html**  
  Ejemplo de cómo obtener y mostrar el nombre del mes actual en texto, además de la fecha en formato numérico.

- **03_fecha.html**  
  Reloj digital que se actualiza cada segundo usando `setTimeout`, mostrando la hora en formato hh:mm:ss.

- **04_compara_fechas.html**  
  Solicita al usuario su año de nacimiento y calcula la edad, validando que el año sea lógico.

- **05_fecha.html**  
  Muestra la hora local en formato de 12 horas (AM/PM), ajustando los minutos y el formato correctamente.

- **06_timers.html**  
  Reloj digital que se puede detener con un botón, usando `setTimeout` y controlando la actualización manualmente.

- **MDN.PNG**  
  Imagen utilizada como icono/enlace a la documentación oficial de MDN sobre el objeto `Date`.

- **css/**  
  Carpeta con la hoja de estilos utilizada por los ejemplos.

- **js/**  
  Carpeta con los scripts JavaScript para las distintas versiones que se pueden cargar desde [index.html](index.html).

## Cómo usar

1. Abre [index.html](index.html) en tu navegador.
2. Modifica el script activo para ver el ejemplo que desees.
3. Explora el código fuente de cada archivo en la carpeta `js/` o los HTML de la raíz para entender su funcionamiento.