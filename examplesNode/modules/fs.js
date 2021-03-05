const fs = require('fs')
let pathFile = __dirname+'/testFile.txt'

function readMyFile(pathFile, callback) {
  fs.readFile( pathFile, (err, data) => {
    if (err) throw err
    callback(data.toString())
  })
}

//writeFile, reemplaza el contenido si el archivo ya existe.
function escribir(pathFile, content, callback) {
  fs.writeFile(pathFile, content, function(err){
    if(err) {
      console.error('Error escribiendo.')
    }
    else{
      console.log('Escrito correctamente')
    }
  }) 
}

// UNLINK
function deleteFile(pathFile, cb){

  fs.unlink(pathFile, function(err){
    if(err) throw err
    else console.log('path/file.txt was deleted')
  })
}

console.log('INI');
//escribir(pathFile, 'Text content to append to file')
//readMyFile(pathFile, console.log)
deleteFile(pathFile, console.log) 
console.log('FIN')  
