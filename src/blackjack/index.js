import _ from 'underscore'; // === import {shuffle} from 'underscore' , control^ + barra espaciadora presionando estas dos teclas con el cursor entre {} me va a desplazar todas las listas de funciones que tengo disponible
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0 , puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');

  
deck = crearDeck (tipos , especiales); //aqui le escribo los argumentos que me solicita crearDeck, esos argumentos estan en mi file crear-deck.js en la funcion crearDeck la cual estoy exportando aqui.. entonces le argumento tipos y especiales que son los dos arrays que se encuentran aqui y que contienen los datos que a mi me interesan
//ademas aqui igual el deck que tengo este archivo index que es un arreglo vacio , y le otorgo el valor de crearDeack () que es mi funcion donde estan todas las cartas 


// Eventos
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( deck );
    
    puntosJugador = puntosJugador + valorCarta( carta );
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = crearCartaHTML ( carta );
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {

    console.clear();
    deck = [];
    deck = crearDeck(tipos, especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
