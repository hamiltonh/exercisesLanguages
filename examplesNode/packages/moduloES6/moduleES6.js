//Learning about of EXPORTS modules in node. USE module.exports. FN_NAME = FN_NAME

const propiedad1 =  "Test"
const countLetters = ( p_string ) => p_string.replace(/ /g,"").length
const testCountLetters = (p_string) => {
    console.log(`Quantity of letters of [${p_string}]:`, countLetters(p_string))
}

//MODE ES6 SOPORTADA POSTERIORMENTE EN NODE
export default  {
    countLetters,
    testCountLetters,
    propiedad1
}


