const redis = require('redis')
const configRedis = require('../config/config').redis
let options = { port: configRedis.port, host: configRedis.host }
if (configRedis.password !== '') {
  options.password = configRedis.password
}
const redisClient = redis.createClient([options])
redisClient
  .once('ready', () => {
    console.log('🚀 Redis client connection success')
  })
  .on('error', error => {
    console.log(`❌ Redis connection error.\n${error}`)
  })

module.exports = () => redisClient