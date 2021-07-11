'use strict'
// ES6 - async - await
function saludo (nombre) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(()=> {
                console.log(`Hola como estas ${nombre}`) 
                resolve('OK')
            }, 2000 )    
        } catch (error) {
            console.log('ERROR', error) 
            reject(error) 
        }
    })  
}

function contestar () {
    return new Promise((resolve, reject) => {
        try {
            //throw "ERROR PRUEBA";
            setTimeout(function(){
                console.log(`Bien y vos?`)
                resolve()
            }, 1000)
        } catch (error) {
            console.log('ERROR', error) 
            reject(error) 
        }
    })  
}

// IMPORTANTE: AWAIT solo es válido dentro de una función asíncrona.
// En este punto podrias ejecutar las 2 promesas sin el await, pero perderian su secuencialidad
async function main(){
    await saludo('nicolas')
    //await contestar().catch(error => console.log('Error, catch dentro del main') )
    await contestar()
}

console.log(`INIT`)
main().catch(error => console.log('Error, catch dentro del main') )
console.log(`END`)  




