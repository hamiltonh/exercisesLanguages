//MODULO HTTP - 2021
//Open with http://localhost:3000/

console.clear()
const port = process.env.PORT || 3000
const { createServer } = require ('http')

const router = (req, res) => {
    console.log('Nueva Peticion!')
    console.log(req.url)

    switch (req.url) {
        case '/':
            res.write('Probando res.!')
            break;
        case '/uploadFile':
            res.writeHead(201, {'Content-Type': 'text/plain'})
            res.write('Probando Upload File!')
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.write('Probando Error 404!')
            break;
    }
    res.end()
}

createServer(router).listen(port)
console.log(`Iniciando server http en puerto:${port}`)

