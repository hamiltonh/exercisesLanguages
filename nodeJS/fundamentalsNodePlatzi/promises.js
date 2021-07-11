
//Ejemplo Promesa

function saludo (nombre) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(()=> {
                console.log(`Hola como estas ${nombre}`) 
                resolve('OK')
            }, 1000 )    
        } catch (error) {
            reject(error) 
        }
    })  
}

function contestar () {
    setTimeout(function(){
        console.log(`Bien y vos?`)
    }, 1000)
}

console.log(`INIT`)
saludo('nicolas').then(()=>  contestar() )
.catch(err=>console.error('Error',  err) )
console.log(`END`) 