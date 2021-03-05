//Testing require custom and local module
/*
022021 - La sitanxis es6 ya es soportada por node de manera oficial. ANtes de utilizaban extensiones de archivo *.mj6 
con la bandera >node --experimental_modules file.mjs
*/ 
console.clear()

//MODULES WITH ES6 MODE 
import { countLetters, testCountLetters } from './moduleES6.js';

let word = "hola como estas!"
try {

    console.log(countLetters(word))
    console.log(testCountLetters(word));  
    console.log(propiedad1) 

} catch (error) {
    console.error('Ocurrio un error: ', error)
} 
