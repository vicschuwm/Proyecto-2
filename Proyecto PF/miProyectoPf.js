//Función para crear encuesta //en el array encuesta estoy guardado un objet con los datos, variable
function crearEncuesta() {
     encuesta = []
   
    for (let i = 0; i < 2; i++) {
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

  // función para votar en una encuesta // iterar sobre todas las preguntas/respuestas
  function votarEncuesta (encuesta) {
    respuestas = []
    encuesta.map((pregunta) => { 
       const respuesta = prompt(`Responda: ${pregunta.pregunta}: a. ${pregunta.opciones[0]} b. ${pregunta.opciones[1]}:`);
   
    // respuestas.push(respuesta)
    // segun cada respuesta voy sumando más uno
    if (respuesta == "a") {
        pregunta.votos.opcion1 +=1
    }
    else if (respuesta == "b") {
        pregunta.votos.opcion2 +=1
    }

    })

    return encuesta;
  }


  // Encuesta nueva
  let nuevaEncuesta = crearEncuesta();
  
  const encuestaContestada = votarEncuesta(nuevaEncuesta);
  console.log(encuestaContestada)

  // hasta aca esta bien NO CAMBIAR //