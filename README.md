<a name="top"></a>
# Analizador de texto

## Índice

* [1. Introducción](#1-introducción-keyboard)
* [2. Funcionalidad](#2-funcionalidad-gear)
* [3. Diseño](#3-diseño-art)

## 1. Introducción :keyboard:

Esta aplicación web es un analizador de texto cuyo objetivo es extraer información útil de un texto ingresado por la usuaria en el navegador.

Esta aplicación busca ayudar a las usuarias a obtener una comprensión más profunda de los elementos contenidos dentro de su texto como el recuento de caracteres, palabras, y números.

Todo esto utilizando HTML, CSS y JavaScript.

## 2. Funcionalidad :gear:

La aplicación permite que la usuaria ingrese un texto escribiéndolo en un cuadro de texto y mostrando los contadores de las métricas en tiempo real. 

A medida que la usuaria escribe, la aplicación calcula:

  1. **Recuento de caracteres**: cuenta el número total de caracteres en el texto, incluyendo espacios.
  2. **Recuento de caracteres excluyendo espacios y signos de puntuación**: cuenta el número total de caracteres en el texto, excluyendo espacios y signos de puntuación.
  3. **Recuento de palabras**: cuenta el número de palabras en el texto. 
  4. **Recuento de números**: cuenta el número de caracteres numéricos en el texto.
  5. **Suma total de números**: suma todos los números en el texto.
  6. **Longitud media de las palabras**: calcula el promedio de la longitud de las palabras en el texto.

La usuaria puede también limpiar el contenido de la caja de texto haciendo clic en un botón e iniciar desde 0 otra vez.

## 3. Diseño :art:

Se adoptó un diseño más bien minimalista, limpio, considerando espacio negativo/en blanco y sin contenido visual adicional. 

El diseño escogido es simple porque busca ser fácil de usar contribuyendo a mantener el foco de usuarias en el objetivo de esta aplicación web, esto es, que primero vea los contadores con los que podrá analizar y que luego tenga el espacio adecuado para que escriba o copie y pegue su contenido.

Los colores utilizados usados pertenecen a una paleta de colores con armonía de color tríadica.

El uso de tres tipografías distintas busca que usaria identifique los elementos con claridad, y que a la vez le sean familiares. 
- La fuente empleada en `<header>` y `<footer>`, _Coming soon_, busca reflejar la escritura a mano.
- La fuente empleada para los contadores, _Courier New_, apunta a la escritura en máquina/dispositivos.
- La fuente empleada en `<textarea>`, _Verdana_, busca mayor accesibilidad.

[Subir](#top)
