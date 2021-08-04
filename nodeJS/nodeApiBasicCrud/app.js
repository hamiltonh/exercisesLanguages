// API REST EXAMPLE
// Ref: https://www.youtube.com/watch?v=pKd0Rpw7O48
const express = require('express')
const app = express()
const Joi = require('joi') //validation data

app.use(express.json())

// Mock
const courses = [
    {id:1, name:'Curso 1 HTML'},
    {id:2, name:'Curso 1 CSS'},
    {id:3, name:'Curso 1 JS'},
]

app.get('/', (req, res)=>{
    const MSG = 'WELCOME - API REST EXAMPLE'
    res.send(MSG)
})

app.get('/api/courses', (req, res)=>{
    res.send(courses)
})

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find( (el)=>el.id === parseInt(req.params.id) )
    
    if(!course) {
        return res.status(400).send({'error': true, 'body':'Not found!'})
    }
    res.status(200).send(course)
})

app.post('/api/courses', (req, res) => {

    // Manual validation
    // if(!req.body.name || req.body.name.length < 3) {
    //     res.status(400).send({'error': true, 'message':'Bad request.'})
    //     return; // Required to break
    // }
    
    //Validate using Joi
    const { error } = validateCourse(req.body)
    
    if(error) {
        res.status(400).send({'error': true, 'body':error.details[0].message})
        //Note: Never response with error details to frontend.
        return // Required to break, after the res.
    }
    
    const course = {
        id: courses.length+1,
        name: req.body.name,
    }
    courses.push(course)
    console.table(courses)
    res.send(course)
})

app.put('/api/courses/:id', (req, res)=> {

    //Find
    const course = courses.find( (el)=>el.id === parseInt(req.params.id) )
    if(!course) {
        return res.status(400).send({'error': true, 'body':'Not found!'}) //Important return to break
    }

    // Validate
    const { error } = validateCourse(req.body)

    if(error) {
        res.status(400).send({'error': true, 'body':error.details[0].message})
        //Note: Never response with error details to frontend.
        return // Required to break, after the res.
    }

    // Set
    course.name = req.body.name
    console.table(courses)
    res.send(course)
})

app.delete('/api/courses/:id', (req, res)=>{

    // find
    const course = courses.find( (el)=>el.id === parseInt(req.params.id) )
    if(!course) {
        return res.status(400).send({'error': true, 'body':'Not found!'})
    }
    
    // Delete
    const index = courses.indexOf()
    courses.splice(i)
})

const validateCourse = (course) => {

     //Validate using Joi
     const schema = Joi.object({
        name: Joi.string().min(3).required()
    })

    return schema.validate(course)
}

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log('Conectado! ', PORT) )