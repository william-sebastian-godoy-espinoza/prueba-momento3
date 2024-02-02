alert("¡Bienvenidos a 'Escapando de las Complicaciones de la Corte'!\n\nEnrique VIII y Catalina de Aragón necesitan tu ayuda para sortear los desafíos políticos y amorosos de la corte.");

const royal = {
  titulo: "Objetos para escapar de las complicaciones de la corte",
  propietarios: "Enrique VIII y Catalina de Aragón",
  anillo: {
    material: "oro",
    grabado: "E + C"
  },
  retrato: "pintura en óleo",
  documentos: [
    { tipo: "matrimonio", estado: "complicado" },
    { tipo: "anulacion", estado: "negada" }
  ],
  vestimenta: {
    vestidoReina: "rojo",
    vestidoRey: "majestuoso"
  },
  secretos: [
    "Amor prohibido",
    "Ambiciones políticas",
    "Intrigas en la corte"
  ]
};

const preguntas = [
  {
    pregunta: "¿Cuál fue el motivo principal de las complicaciones matrimoniales de Enrique VIII?",
    opciones: ["a) Falta de amor", "b) Falta de heredero varón", "c) Diferencias religiosas"],
    respuesta: "b",
    propiedadEliminar: "documentos"
  },
  {
    pregunta: "¿Cuál fue la razón dada por Enrique VIII para buscar la anulación de su matrimonio con Catalina de Aragón?",
    opciones: ["a) Infidelidad", "b) Parentesco prohibido", "c) No fue dada ninguna razón"],
    respuesta: "b",
    propiedadEliminar: "retrato"
  },
  {
    pregunta: "¿Qué consecuencias tuvo la negativa del Papa a anular el matrimonio en la corte de Enrique VIII?",
    opciones: ["a) Enrique aceptó la decisión y permaneció casado con Catalina", "b) Enrique creó la Iglesia de Inglaterra", "c) Catalina obtuvo la anulación por decisión propia"],
    respuesta: "b",
    propiedadEliminar: "anillo"
  },
  {
    pregunta: "¿Quién fue la siguiente esposa de Enrique VIII después de Catalina de Aragón?",
    opciones: ["a) Ana Bolena", "b) Juana Seymour", "c) Catalina Howard"],
    respuesta: "a",
    propiedadEliminar: "secretos"
  }
];

let conocimiento = 0;

function hacerPregunta(indice) {
  if (indice >= preguntas.length) {
    let mensajeFinal = `¡Felicidades! Has completado el juego. Tu conocimiento es ${conocimiento}/${preguntas.length}.\n\n`;
    const objetosRestantes = Object.keys(royal).filter(key => key !== "titulo" && key !== "propietarios");
    if (objetosRestantes.length > 0) {
      console.log(objetosRestantes)
      mensajeFinal += "Objetos restantes:\n";
      objetosRestantes.forEach(key => {
        mensajeFinal += `- ${key}\n`;
      });
    } else {
      mensajeFinal += "Enrique y Catalina han superado las complicaciones de la corte.\n";
    }
    alert(mensajeFinal);
  } else {
    const preguntaActual = preguntas[indice];
    const respuesta = prompt(`${preguntaActual.pregunta}\n\n${preguntaActual.opciones.join("\n")}\n\nRespuesta:`);
    if (respuesta && respuesta.toLowerCase() === preguntaActual.respuesta) {
      alert("¡Respuesta correcta!\n\n");
      conocimiento++;
    } else {
      alert("Respuesta incorrecta.\n\n");
      console.log(royal)
      delete royal[preguntaActual.propiedadEliminar];
    }
    hacerPregunta(indice + 1);
  }
}

hacerPregunta(0);
