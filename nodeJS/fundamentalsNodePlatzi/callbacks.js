//callbacks

//Ejemplo callback
function saludo (nombre, callback) {
    setTimeout(()=> {
        console.log(`Hola como estas ${nombre}`) 
        callback()
    }, 1500 )
}

function contestar () {
    setTimeout(function(){
        console.log(`Bien y vos?`)
    }, 1500)
}

console.log(`INIT`)
saludo('nicolas', function(){
    contestar();
})
console.log(`END`) 






//callbacks
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola, " + nombre);
        miCallback(nombre);
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout( function() {
        console.log("Adios",  nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso....");
hola( "Carlos", function (nombre) {
    adios(nombre, function() {
        console.log("Terminando proceso....");
    }); 
});


//Otro ejemplo callback
/*
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
*/
