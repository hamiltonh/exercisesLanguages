//Learning about of EXPORTS modules in node. USE module.exports. FN_NAME = FN_NAME

const countLetters = ( p_string ) => p_string.replace(/ /g,"").length
const testCountLetters = (p_string) => {
    console.log(`Quantity of letters of [${p_string}]:`, countLetters(p_string))
}

//TRADICIONAL WAY
//To export for use, out of this file.
// module.exports.countLetters = countLetters
// module.exports.testCountLetters = testCountLetters
// module.exports.propiedad1 = 'testing'

// Another way
module.exports = {
    countLetters,
    testCountLetters,
    propiedad1 : 'testing'
}


