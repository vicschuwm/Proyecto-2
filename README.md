![Banner](Banner.png)

# Proyecto 2 - Sistema de Votación en JavaScript

Para este proyecto se aplicaron los conceptos de programación en JavaScript, estructuras de datos, control de flujo y se utilizó Git y GitHub.

## Planteamiento

Construir un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. El programa debia cumplir con los siguientes requisitos:

- Permitir a los usuarios crear encuestas con opciones de respuesta.
- Permitir a los usuarios votar en las encuestas.
- Mostrar los resultados de las encuestas en tiempo real.
- Almacenar los datos de las encuestas y los votos en una variable.
- Implementar la solución utilizando programación orientada a objetos (POO) o programación funcional (PF).
- Subirás la solución a un repositorio de GitHub.

## Solución explicada paso a paso

1. Crear una función que permita al usuario ingresar preguntas y respuestas.
- Se creó la función `crearEncuesta`, dentro de la cuál está el arreglo `encuesta`
- Mediante un bucle `for` se solicita al usuario que ingrese 8 preguntas y para cada una de las preguntas se le solicita que ingrese 2 opciones de respuesta.
- Las preguntas quedan registradas en la constante `pregunta` y las respuestas en las constante `opcion1` y `opcion2`

```scss
function crearEncuesta() {
     encuesta = []
   
    for (let i = 0; i < 8; i++) {
      const pregunta = prompt(`Ingrese la pregunta número ${i + 1}:`);
      const opcion1 = prompt(`Ingrese la primera opción de respuesta para la pregunta ${i + 1}:`);
      const opcion2 = prompt(`Ingrese la segunda opción de respuesta para la pregunta ${i + 1}:`);
  
      encuesta.push({
        pregunta: pregunta,
        opciones: [opcion1, opcion2],
        votos: { "opcion1": 0, "opcion2": 0 }
      });
    }
  
    return encuesta;
  }
```

2. Crear una función que permita al usuario votar entre las opciones 1 y 2 de las respuestas a las preguntas ingresadas anteriormente.
   
