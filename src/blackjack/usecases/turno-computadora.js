//LA IDEA AQUI FUE TRABAJAR CON LOS PUNTOS DE LA COMPUTADORA Y ADEMAS TRABAJAR CON LAS INSERCIONES QUE SON LAS IMAGENES DE LAS CARTAS Y LOS VALORES 

import { crearCartaHTML, pedirCarta, valorCarta } from "./";
//importamos las funciones pedirCarta y valorCarta porque aqui en el turno de la computadora tambien estan estas dos funciones al igual que con el jugador 

//turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos  
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<String >} deck  
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora ,deck = [] ) => {

    if (!puntosMinimos) throw new Error ('Puntos minimos son necesarios'); //RECORDAR siempre debemos crear condiciones internas con el 'if' dentro de las funciones. Es un modo de hacer el codigo mas facil para todos y en el caso de haber errores que nos avise arrojando un error 'throw new Error'
    if (!puntosHTML) throw new Erorr ('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML ( carta );  
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
