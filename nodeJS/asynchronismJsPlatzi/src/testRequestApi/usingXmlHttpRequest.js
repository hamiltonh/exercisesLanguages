// Proyecto personal consumir API publica 2021 - I

//Testing api worldbank  FUENTE: https://data.worldbank.org/indicator/SP.DYN.LE00.IN?locations=CO

// Importamos el modulo como dependencia de desarrollo, para hacer los request con NPM, asi:
//  npm install xmlhttprequest --save-dev
//Importamos modulo
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let api = 'http://api.worldbank.org/v2/country/:COUNTRY/indicator/SP.DYN.LE00.IN?date=2018&format=json';

function fetchData(url_api, callback) {

  let xhttp = new XMLHttpRequest();
  //  (method, url, async, user, password).
  xhttp.open('GET', url_api, true);
  
  //object.onreadystatechange define una funcion que se ejecutará cada vez que el atributo readyState cambie.
  //readyState pasa por todo el ciclo de estados de  0 a 4, por eso el if anidado y no en linea
  xhttp.onreadystatechange = (event) => {
    
    console.log("xhttp.readyState:", xhttp.readyState);
    console.log("xhttp.status:", xhttp.status);
    // estado 0: inicializado
    // estado 1: cargando
    // estado 2: ya se cargó
    // estado 3: ya hay información
    // estado 4: solicitud completa
    //COD status
    // 200: “OK”
    // 403: “Forbidden”
    // 404: “Page not found”
    //500 =>“internal server error”(‘error interno del servidor’)
    
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

//MAIN
api = api.replace(':COUNTRY', 'COL');

fetchData(api, (error1, data1) => {
        
    if(error1) return console.error(error1);
    else{
        //Category info
        console.log(data1[1][0].indicator.value);
        //Country
        console.log(data1[1][0].country.value);
        //Date
        console.log(data1[1][0].date);
        //Life Expectancy
        console.log(data1[1][0].value);

    }
})
