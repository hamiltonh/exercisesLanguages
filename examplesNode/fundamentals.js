/*
Curso de Fundamentos de Node.js
2021-01
Platzi
*/

/*
VARIABLES DE ENTORNO
Ejecutar por consola BASH: NOMBRE=Nicolas node fundamentals.js 
Tambien se pueden gestionar a traves de un archivo. Instalar libreria dotenv
*/
let fullName  = process.env.NOMBRE || 'anonimo.'
console.log(`Hola ${fullName}, como estas?`)


//Ejemplo callback
function fn (mensaje){
    console.log(mensaje)
}

function printLog(mensaje, callback) {
  setTimeout(() => {
    callback(mensaje)      
  }, 1000)
}

fn('holaEjemplo console.log normal')
printLog('Ejemplo donde el console.log se envia como funcion callback, sin parametro',console.log)
