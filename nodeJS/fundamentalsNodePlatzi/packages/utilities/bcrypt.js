const bcrypt = require('bcrypt')

//Otras utilidades necesarias: 
//momment para fechas
//sharp: manejo de imagenes

const password = 'ClaveTest'
const quantity  = 5

//using bcrypt wit callbacks
/*
bcrypt.hash(password, quantity, function(err, res){
    (err) ?
    console.error(err) :
    bcrypt.compare(password, res, function(err, result) {
        console.log(result);
    });
})
*/

//Using promises
function storeHashPassword (username, plainTextPass){

    let saltRounds = quantity;
    bcrypt.hash( plainTextPass, saltRounds).then((result) => {
        console.log('Hash generated!', result)
        //Store hash in your password BD
    }).catch((err) => {
        console.log('Error, generating hash:', error)
    });
}

//storeHashPassword('hamiltonh', 'MyClave123')

//Using ASync(wait)
async function storeHashPassword (username, plainTextPass){

    try {
        let saltRounds = quantity;
        let hashPass = await bcrypt.hash( plainTextPass, saltRounds);
        console.log('Hash generated!', hashPass)
        //Store hash in your password BD    
    } catch (error) {
        console.log('Error, generating hash:', error)
    }

}
storeHashPassword('hamiltonh', 'MyClave123')