// Referencias del DOM
const btnNuevoJuego = document.querySelector("#btnNuevoJuego"),
  btnPedirCarta = document.querySelector("#btnPedirCarta"),
  puntosHTML = document.querySelectorAll("small"),
  jugadoresCartas = document.querySelectorAll(".cards");

// Variables
let baraja = [],
  jugadoresPuntos = [];

/**
 * C = Treboles
 * D = Diamantes
 * H = Corazones
 * S = Espadas
 */

const tipos = ["C", "D", "H", "S"],
  especiales = ["A", "J", "Q", "K"];

/** Inicializa la app */
const init = (cantidadJugadores = 2) => {
  baraja = crearBaraja();

  for (let i = 0; i < cantidadJugadores; i++) jugadoresPuntos.push(0);

  // for (let jugadorPuntos in jugadoresPuntos) {
  //   puntosHTML[jugadorPuntos].textContent = 0;
  //   jugadoresCartas[jugadorPuntos].textContent = "";
  // }
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

btnPedirCarta.addEventListener("click", () => {
  console.log("Desde pedir carta!!!");
});
