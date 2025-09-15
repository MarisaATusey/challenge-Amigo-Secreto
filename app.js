// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById("amigo"); // input de nombre ingresado
const ulListaAmigos = document.getElementById("listaAmigos"); // UL de la lista de amigos
const ulResultado = document.getElementById("resultado"); // UL (o contenedor) para el resultado

// Eventos - botones
const btnAgregar = document.getElementById("btnAgregar");
const btnSortear = document.getElementById("btnSortear");
const btnReset = document.getElementById("btnReset");

btnAgregar.addEventListener("click", agregarAmigo);
btnSortear.addEventListener("click", sortearAmigo);
btnReset.addEventListener("click", resetearLista);

 // Obtenemos el valor del input
function agregarAmigo() {
  const amigo = inputAmigo.value.trim(); // Se añade .trim() para eliminar espacios al inicio y final
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;

  if (amigo === "") {
    alert("Ingresa un nombre válido.");
    return;
  }
  if (amigo === !regex.test(amigo)) {
    alert("Ingresa un nombre válido.");
    return;
  }

  if (amigo.length < 2) {
    alert("El nombre debe tener al menos 2 caracteres.");
    return;
  }
  const listaActual = Array.from(ulListaAmigos.querySelectorAll("li")).map(li => li.textContent);
  const yaExiste = listaActual.some(nombre => nombre.toLowerCase() === amigo.toLowerCase());
  if (yaExiste) {
    alert("Este nombre ya está en la lista.");
    return;
  }
  // Si todas las validaciones pasan, se agrega el amigo
  const nuevoAmigo = document.createElement("li");
  nuevoAmigo.textContent = amigo;
  ulListaAmigos.appendChild(nuevoAmigo);

  inputAmigo.value = "";


// Función: renderizar la lista de amigos
function renderLista() {}
  // Actualizar UI
  renderLista();
  actualizarUI();
}

// Función: sortear amigo
function sortearAmigo() {
  // Construimos un arreglo de los nombres actuales dentro de ulListaAmigos
  const items = Array.from(ulListaAmigos.querySelectorAll("li")).map(li => li.textContent);

  if (items.length < 2) {
    ulResultado.innerHTML = `<li>Ingrese al menos 2 participantes.</li>`;
    return;
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  const amigoSecreto = items[randomIndex];
  ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

// Función: reiniciar la lista
function resetearLista() {
  // Vaciar la lista de amigos
  ulListaAmigos.innerHTML = "";

  // Limpiar UI
  renderLista();
  ulResultado.innerHTML = ""; 

  // Actualizar estados de los botones
  actualizarUI();
}

// Función: actualizar estados de la UI 
function actualizarUI() {
  // Deshabilitar sorteo si hay menos de 2 participantes
  const lista = Array.from(ulListaAmigos.querySelectorAll("li"));
  btnSortear.disabled = lista.length < 2;
  btnAgregar.disabled = inputAmigo.value.trim() === "";  
  // Deshabilitar agregar si el input está vacío (opcional)
  // btnAgregar.disabled = inputAmigo.value.trim() === "";
}

// Inicializar UI
renderLista();
actualizarUI();


//HACER UN REGEX DE VALIDACIONES


