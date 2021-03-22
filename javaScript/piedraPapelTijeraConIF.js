/*
112020 JAVASCRIPT CONDITIONALS IF ELSE - PLATZI COURSE
@hamilton_h
*/
let arrayOptionsAllowed = ['PIEDRA','PAPEL','TIJERA'];
let messages = {
    ERROR        : 'ERROR. OPCION NO VALIDA',
    TIE          : 'EMPATADOS!',
    GAMERWIN     : 'GANA JUGADOR!',
    COMPUTERWIN  : 'GANA COMPUTADORA! JAJA'
}
let winsTo = {
    PIEDRA  : 'TIJERA',
    PAPEL   : 'PIEDRA',
    TIJERA  : 'PAPEL'
}

function isOptionAllowed(strOption){

    let rst  = false;        
    if( arrayOptionsAllowed.includes(strOption) ){
        rst = true;
    }else{
        rst = false;
    }   
    return rst;
}

function selectWinner( gamerOpcion, computerOption ){

    let rst = '';   
    if ( isOptionAllowed(gamerOpcion) && isOptionAllowed(computerOption) ){

        if (gamerOpcion === computerOption){
            rst = messages.TIE;
        }
        else if ( winsTo[gamerOpcion] === computerOption ){
            rst = messages.GAMERWIN;
        
        }else if ( winsTo[computerOption] === gamerOpcion ) {
            rst = messages.COMPUTERWIN;
        }else{
            rst = messages.ERROR;    
        }

    }else{
        rst = messages.ERROR;
    }
    return rst;
}

// MAIN PROGRAM
let cantOptions     = arrayOptionsAllowed.length;
let computerOption  = arrayOptionsAllowed[  Math.floor(Math.random() * Math.floor(cantOptions)) ];
let humaneOption    = 'PAPEL';

console.log(`Comienza el juego. Opcion Humano: ${humaneOption} -VS- Opcion computadora: ${computerOption}`);
selectWinner(humaneOption, computerOption);



