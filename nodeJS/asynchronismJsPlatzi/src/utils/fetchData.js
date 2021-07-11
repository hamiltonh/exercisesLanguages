//Importamos modulo 
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//ES6
const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {
    
        let xhttp = new XMLHttpRequest();
        //  (method, url, async, user, password).
        xhttp.open('GET', url_api, true);
        
        //object.onreadystatechange define una funcion que se ejecutará cada vez que el atributo readyState cambie.
        //readyState pasa por todo el ciclo de estados de  0 a 4, por eso el if anidado y no en linea
        // EL PARAMETRO EVENT ES BUENA PRACTICA ponerlo pero no lo vamos a utilizar.
        xhttp.onreadystatechange = () => {
        
            if(xhttp.readyState === 4 ){
                ( xhttp.status === 200 ) 
                ?  resolve(JSON.parse(xhttp.responseText) )
                : reject (new Error ('Error', url_api));
            }
        }
        xhttp.send();    
    });
}

//Node aun utiliza commonjs, x eso el uso de module.exports
module.exports = fetchData; 


//fetch data con callbacks , js antes de es6
/*
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  //  (method, url, async, user, password).
  xhttp.open('GET', url_api, true);
  
  //object.onreadystatechange define una funcion que se ejecutará cada vez que el atributo readyState cambie.
  //readyState pasa por todo el ciclo de estados de  0 a 4, por eso el if anidado y no en linea
  xhttp.onreadystatechange = (event) => {
    if(xhttp.readyState === 4 ){

        if( xhttp.status === 200 ) {
            callback(null, JSON.parse(xhttp.responseText));             
        } else {
            let error = new Error('Error: ' + url_api + 'status:'+xhttp.status); 
            return callback(error, null);
        }
    }
  }
  xhttp.send();
}
*/
