'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/games', async function (request, reply) {
        return 'this is an example'
    })
}
