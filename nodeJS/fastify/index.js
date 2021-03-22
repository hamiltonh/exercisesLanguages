'use strict'

// module.exports  = async function ( fastify, options ){
//     fastify.get ('/', async (request, reply) => {
//         return  {
//             grettings: 'Hola Mundo!'
//         }
//     })
// }


module.exports = function (fastify, opts, next) {
    fastify.get('/', (req, reply) => reply.send({hello: 'world'}))
  }