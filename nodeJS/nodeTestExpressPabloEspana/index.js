const server = require ('express')
const app = server()
const path = require ('path')

//settings
app.set ('port', 3001)

//middleware  express.static 
app.use(server.static(path.join(__dirname, 'public')))

//routes
app.get( '/', (req, res) => {
    res.send('Hola')
})

app.listen( app.get('port'), () => console.log(`Server iniciado en ${app.get('port')}`))