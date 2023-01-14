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

/** Se encarga de obtener una carta */
const obtenerCarta = () => {
  if (baraja.length <= 0) throw "No hay cartas en la baraja";

  return baraja.pop();
};

/**
 * - Obtener valor de la carta
 * - Acumular puntos
 *
 *
 */

const acumularPuntos = ({ carta, turno }) => {
  jugadoresPuntos[turno] += obtenerValorDeCarta(carta);
  puntosHTML[turno].textContent = jugadoresPuntos[turno];

  return jugadoresPuntos[turno];
};

const obtenerValorDeCarta = (carta) => {
  const valor = carta.substring(0, carta.length - 1);

  return !isNaN(valor) ? valor * 1 : valor === "A" ? 11 : 10;
};

const crearCarta = ({ carta, turno }) => {
  const imagen = document.createElement("img");
  imagen.src = `assets/${carta}.png`;
  imagen.classList.add("carta");
  jugadoresCartas[turno].append(imagen);
};

// Eventos;
btnNuevoJuego.addEventListener("click", () => {
  init();
});

btnPedirCarta.addEventListener("click", () => {
  const carta = obtenerCarta();
  const jugadorPuntos = acumularPuntos({ carta, turno: 0 });
  crearCarta({ carta, turno: 0 });
});
