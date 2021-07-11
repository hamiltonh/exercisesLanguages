//Testing require custom and local module
console.clear()

//REQUIRING MODULES - TRADITIONAL WAY - NODE
const {countLetters, testCountLetters,propiedad1} = require('./module.js')
let word = "hola como estas!"

try {

    console.log(countLetters(word))
    console.log(testCountLetters(word));  
    console.log(propiedad1) 

} catch (error) {
    console.error('Ocurrio un error: ', error)
}
