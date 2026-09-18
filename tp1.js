let fila = [];
let totalIngresados = 0;
let totalAtendidos = 0;

function agregarPersona() {
    const input = document.querySelector("#nombre");
    const nombre = input.value.trim();

    if (nombre === "") {
      alert("Debe ingresar su nombre");
      return;
    }

    fila.push(nombre);
    totalIngresados++;

    input.value = "";
    mostrarFila();
  }

  function atenderPersona() {
    if (fila.length === 0) {
      alert("No hay nadie en la fila para atender.");
      return;
    }

    const atendido = fila.shift();
    totalAtendidos++;

    console.log("Se atendió a: " + atendido);
    mostrarFila();
  }

  function mostrarFila() {
    const lista = document.querySelector("#listaFila");
    lista.textContent = "";

    for (let i = 0; i < fila.length; i++) {
      const item = document.createElement("li");
      item.textContent = fila[i] + " - Posición " + (i + 1);
      lista.appendChild(item);
    }
  }

  function mostrarEstadisticas() {
    document.querySelector("#listaFila").textContent = "";

    let porcentaje = 0;
    if (totalIngresados > 0) {
      porcentaje = Math.floor((totalAtendidos / totalIngresados) * 100);
    }

    const resultado = document.querySelector("#resultadoFinal");
    resultado.textContent =
      "Personas anotadas: " + totalIngresados +
      " | Personas atendidas: " + totalAtendidos +
      " | Porcentaje atendido: " + porcentaje + "%";
  }

  const btnAgregar = document.querySelector("#btnAgregar");
  const btnAtender = document.querySelector("#btnAtender");
  const btnLimpiar = document.querySelector("#btnLimpiar");

  btnAgregar.addEventListener("click", agregarPersona);
  btnAtender.addEventListener("click", atenderPersona);
  btnLimpiar.addEventListener("click", mostrarEstadisticas);