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

  console.log("🚀 ~ init ~ baraja", baraja);

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

    for (let especial of especiales) baraja.push(especial + tipo);
  }

  return _.shuffle(baraja);
};

// Eventos;
btnNuevoJuego.addEventListener("click", () => {
  init();
});
