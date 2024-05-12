//Función para crear encuesta //en el array encuesta estoy guardado un objet con los datos, variable

class Encuesta {
    constructor(){
        this.entradas = []
    }

    crearEncuesta(){
        for (let i = 0; i < 2; i++) {
          const pregunta = prompt(`Ingrese la pregunta número ${i + 1}:`);
          const opcion1 = prompt(`Ingrese la primera opción de respuesta para la pregunta ${i + 1}:`);
          const opcion2 = prompt(`Ingrese la segunda opción de respuesta para la pregunta ${i + 1}:`);
      
          this.entradas.push({
            pregunta: pregunta,
            opciones: [opcion1, opcion2],
            votos: { "opcion1": 0, "opcion2": 0 }
          });
        }
    }
    
    votarEncuesta(){
        this.entradas.map((pregunta) => { 
           const respuesta = prompt(`Responda "a" o "b", para la siguiente pregunta: \n ${pregunta.pregunta}: \n a. ${pregunta.opciones[0]} \n b. ${pregunta.opciones[1]}`);
       
        // respuestas.push(respuesta)
        // segun cada respuesta voy sumando más uno
        if (respuesta == "a") {
            pregunta.votos.opcion1 +=1
        }
        else if (respuesta == "b") {
            pregunta.votos.opcion2 +=1
        }
        })
    }
}
//cuando se llame al metodo crearEncuesta, vamos a rellenar la clase encuesta de preguntas
const encuesta1 = new Encuesta()
encuesta1.crearEncuesta()
encuesta1.votarEncuesta()

//const encuesta2 = new Encuesta()
//encuesta2.crearEncuesta()
//encuesta2.votarEncuesta()

console.log(encuesta1.entradas)