// Ejercicios js holamundo youtuber
// 2021
// https://www.youtube.com/watch?v=MXmQM_Uehtk&t=485s

// 1. multiplicar 2 num sin utilizar (*)
const multiply = (num1, num2) => {

    let acum = 0
    const SOME_NEGATIVE = Math.abs(num1) !== num1  || Math.abs(num2) !== num2
    for (let i = 0; i < Math.abs(num2); i++) {
          
        acum  = SOME_NEGATIVE ?  acum + num1 : acum - num1
    }
    return acum
}
console.log(multiply(3,-7));
console.log(multiply(-7,-3));


// 2. obtener el num mayor de un arreglo, interando solo 1 vez
const list = [2,3,4,5,6,2,5,9,7,0,1000]
const reducerFuntion = (acum, el) => el > acum ? el : acum
const maxNum = list.reduce(reducerFuntion, 0)
console.log(maxNum);


// 3. interando un arreglo una sola vez, eliminar los null, 0 , undefined, false
const arr= [2,3,4,5,6, null, 2,5,9,7,0,1000, null, false, 0 , undefined]
const rst = (arr) => arr.filter((el)=> el? true: false)
console.table(rst(arr));



//4. aplanar un arreglo de arreglos y disminuir 1 nivel
console.clear();
const arr2 = [[1,2], [[3,4]], [1,[]]]
// output correct: [ 1, 2, [ 3, 4 ], 1, [] ]

let rst2 = []
arr2.forEach((el)=> rst2.push(...el))
console.log(rst2);


//Another way
// console.clear();
const ar = [[1,2], [[3,4]], [1,[]]]
const flatArray = arr => ar.reduce( (acum, el) => acum.concat(el) , []) //[] init value
console.log(flatArray(ar));


// 5. Escribir fn para contar las veces que se repite una palabra dada, dentro de una cadena.
console.clear();
const cadena= 'Hola como estas, Hola, Hola'
const word = 'Hola'

const resultado = cadena.split(' ').reduce( (acum, el) =>{ 

    const cleanElem = el.replace(/[^a-z0-9]/gi,'') // Remover todo excepto a-z0-9
    // console.log(word, '=', cleanElem)
    return acum += (cleanElem == word ? 1 : 0)

}, 0)
console.log(resultado)



// 5.1 fn para contar las palabras repetidas en una cadena
const cadena2 = 'Carro Hola como estas Hola Hola Pedro'
// result: Hola 3
console.clear();
const cantidades = cadena2.toLowerCase().split(' ').reduce((acum, elem)=>{
    
    if( elem in acum ){
        acum[elem] = acum[elem] + 1
    } else {
        acum[elem] = 1
    }
    return acum
}, {}) // Retorna un obj
// console.log(cantidades);

//Como reduce requiere un array, convertimos a array.
//Resolvemos con el de mayor cantidad.
const finalRta =  Object.entries(cantidades).reduce( (acum, el) => acum[1] > el[1] ? acum : el )
console.log(finalRta);


// 6. Is palindrom word?

console.clear();
const palabra = 'ala'
const isPalindrome = str => {
    const lowerWord = str.toLowerCase()
    const reverse_word = lowerWord.split('').reverse().join('')
    return str === reverse_word
}
console.log(isPalindrome(palabra));