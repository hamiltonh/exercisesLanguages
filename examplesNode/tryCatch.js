console.clear()

function brokeFunction (){
    console.log('Inicio Funcion que se rompe"')
    return 5 + z //*** REFERENCE ERROR */
}

function brokeAsyncFunction (callback){
    console.log('Inicio Funcion Async que se rompe"')
    setTimeout(() => {
        try {
            return 5 + z   
        } catch (error) {
            console.error('Error e la funcion asincrona.')
            callback(error)
        }
    }, 1000);
}

try {
    //brokeFunction()
    brokeAsyncFunction((error)=>{
        console.log('Error:::')
    })
} catch (error) {
        console.error(error.message)
} finally{
    console.log('Ejecucion  donde en condicion normal o de error debe ejecutar!');
}





//CLASIFICACIONES DE ERRORES
/*
try {
    brokeFunction()
} catch (e) {
        //Clasificacion de errores por tipo
        if (e instanceof TypeError) {
            console.error('TypeError')
        } else if (e instanceof RangeError) {
            console.error('RangeError')
        } else if (e instanceof ReferenceError) {
            console.error('ReferenceError')
        } else if (e instanceof EvalError) {
            console.error('EvalError')
        } else {
           // sentencias para manejar cualquier excepción no especificada
           console.error('Cualquier excepcion', e)
        }

} finally{
    console.log('Ejecucion  donde en condicion normal o de error debe ejecutar!');
}
*/
