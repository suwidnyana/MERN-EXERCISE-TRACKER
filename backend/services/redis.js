const redis = require('redis')

let options = { port: '6739', host: 'localhost' }


const redisClient = redis.createClient([options])

redisClient.connect()

redisClient
    .on('connect', () => {
        console.log(('🚀 Redis client connection success'))
    })
    .on('error', error => {
        console.log((`❌ Redis connection error.\n${error}`))
    })

module.exports = () => redisClient