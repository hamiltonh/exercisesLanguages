//PRACTICE IF ELSE
let arrayOptionsAllowed = ['PIEDRA','PAPEL','TIJERA'];
let messages = {
    ERROR        : 'ERROR. OPCION NO VALIDA',
    TIE          : 'EMPATADOS!',
    GAMERWIN     : 'GANA JUGADOR!',
    COMPUTERWIN  : 'GANA COMPUTADORA! JAJA'
}
let winsWho = {
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
        else if ( winsWho[gamerOpcion] === computerOption ){
            rst = messages.GAMERWIN;
        
        }else if ( winsWho[computerOption] === gamerOpcion ) {
            rst = messages.COMPUTERWIN;
        }else{
            rst = messages.ERROR;    
        }

    }else{
        rst = messages.ERROR;
    }
    return rst;
}

selectWinner('PAPEL', 'PIEDRA');



