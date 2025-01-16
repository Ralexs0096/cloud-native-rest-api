const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
    // TODO: list all the files (json schemas) and run the addSchema method
    // fastify.addSchema(require('./user-input-headers.json'))
    next()
})