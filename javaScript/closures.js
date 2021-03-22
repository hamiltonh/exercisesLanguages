/*
CLOSURES
*/

/*
var counter = 0;

function updateClickCount() {
    ++counter;
    console.log(counter)
}

updateClickCount();
updateClickCount();
counter = 0;
console.log(counter)
*/

//'use strict'
/*
function updateClickCount() {
    let counter = 0;
    ++counter;
    console.log(counter)
}

updateClickCount();
updateClickCount();
counter = 0;
console.log(counter)
*/

/*
const fn = function countWrapper() {
    var counter = 0;
    function updateClickCount() {
        ++counter;
        // Do something with counter
    }
    updateClickCount();
    return counter;
}

const fn1 = fn;
fn1.countWrapper();
fn1.countWrapper();
*/
/*
'use strict'

var updateClickCount = (function(){
    let counter = 0;

    return function(){
        ++counter;
        console.log(counter)
    }
})();

updateClickCount();
updateClickCount();
*/


/* a = (function () {
    var privatefunction = function () {
        console.log('hello');
    }

    return {
        publicfunction : function () {
            privatefunction();
        }
    }
})();

a.publicfunction();
a.publicfunction(); */



/*
const carrito = () =>{
    let carrito = [];
    const addProductos = (producto) =>{
        carrito.push(producto)
        console.log(`Los productos hasta el momento son: ${carrito}`)
    }
    return addProductos;
}

let myCarrito = carrito();
myCarrito("Manzana");
myCarrito("Banana");
myCarrito("Pera");
*/


const person = () => {
    let saveName = "Name";
    return {
      getName: () => saveName,
      setName: (name) => {
        saveName = name;
      },
    };
  };
  
  console.time('engine');
  const newPerson = person();
  console.log(newPerson.getName());
  newPerson.setName('Edward');
  console.log(newPerson.getName);
  console.timeEnd('engine');


