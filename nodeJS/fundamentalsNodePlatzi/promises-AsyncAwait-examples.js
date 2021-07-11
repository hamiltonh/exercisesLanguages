// https://www.npmjs.com/package/node-fetch

// SITUACION A RESOLVER
// const fetch = require('node-fetch')

// const requestApi = ()=>{
//     const URL_API = 'http://glyffix.com/api/Image?word=word'
//     fetch (URL_API)
//     .then( res => res.json() )
//     .then( json => console.log(json.data[0].imageurl))
// }

// console.log('INI SIN CALLBACK');
// requestApi()
// console.log('FIN');
// ---------------------------------------------------------------



// CON CALLBACK
// const fetch = require('node-fetch')

// const requestApi = (callback)=>{

//     const URL_API = 'http://glyffix.com/api/Image?word=word'
//     fetch (URL_API)
//     .then( res => res.json() )
//     .then( json => callback(json.data[0].imageurl))
// }

// console.log('INI CALLBACK');
// requestApi((rst)=>{
//     console.log(rst);
//     console.log('FIN');
// })
// ---------------------------------------------------------------




// CON PROMESAS
// const fetch = require('node-fetch')

// const requestApi = ()=>{

//     return new Promise((resolve, reject)=>{
        
//            //FUNCION ASYNC EJEMPLO DE FETCH, que internamente usa promesas.
//            const URL_API = 'http://glyffix.com/api/Image?word=word'
//            fetch (URL_API)
//             .then( res => res.json() )
//             .then( json => resolve(json.data[0].imageurl))
//             //...then (Asi sucesivamente es que se evita el callback hell)
//             .catch((error)=> reject(new Error(error))) //* Buenas practicas new Error
//             // END //FUNCION ASYNC EJEMPLO DE FETCH

//     })
// }
// console.clear();
// console.log('INI PROMESAS');
// requestApi()
//     .then((resp)=>{
//         console.log('resp :>> ', resp);
//         console.log('FIN');
//     })
//     .catch((err)=>{
//         console.error('Error capturado:',err.message);
//     })
// ---------------------------------------------------------------



// CON ASYNC-AWAIT
const fetch = require('node-fetch')
const requestApi = ()=>{

    return new Promise((resolve, reject)=>{
        
           //FUNCION ASYNC EJEMPLO DE FETCH, que internamente usa promesas.
           const URL_API = 'http://glyffix.com/api/Image?word=word'
           fetch (URL_API)
            .then( res => res.json() )
            .then( json => resolve(json.data[0].imageurl))
            //...then (Asi sucesivamente es que se evita el callback hell)
            .catch((error)=> reject(new Error(error)))
            // END //FUNCION ASYNC EJEMPLO DE FETCH
    })
}

console.log('INI CON SYNC AWAIT');
(async function () {
    rst = await requestApi()
    console.log('rst :>> ', rst);
    console.log('FIN');
})();

