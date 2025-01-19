'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/write', async function (request, reply) {
        return 'this is write'
    })
}
