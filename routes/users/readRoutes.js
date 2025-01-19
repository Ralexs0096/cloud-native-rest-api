'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/read', async function (request, reply) {
        return 'this is read'
    })
}
