// Referencias del DOM
const btnNuevoJuego = document.querySelector("#btnNuevoJuego");

// Variables
let baraja = [];

/**
 * C = Treboles
 * D = Diamantes
 * H = Corazones
 * S = Espadas
 */

const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

/** Inicializa la app */
const init = () => {
  baraja = crearBaraja();

  // TODO: Crear baraja

  // TODO: inicializar puntos de jugadores
};

/** Se encarga de crear la baraja */
const crearBaraja = () => {
  baraja = [];

  for (let tipo of tipos) {
    for (let i = 2; i <= 10; i++) {
      baraja.push(i + tipo);
    }
  }

  console.log("🚀 ~ crearBaraja ~ baraja", baraja);
};

// Eventos
btnNuevoJuego.addEventListener("click", () => {
  init();
});
