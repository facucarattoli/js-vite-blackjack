/**
 * Esta funcion me permite tomar una carta 
 * @param {Array<string>} deck arreglo de string
 * @returns {string} retorna carta del deck
 */
export const pedirCarta = ( deck ) => {
        
    if ( !deck || deck.length === 0 ) { //aqui si el deck es false <!deck> es decir el deck no existe o tiene 0 cartas me arrojara ese error 
        throw 'No hay cartas en el deck';
    }
    
    const carta = deck.pop();
    
    return carta;
}

