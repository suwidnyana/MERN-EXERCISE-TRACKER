const redisClient = require('../services/redis')()

var RedisCache = { get, set }

function get(redis_key) {
  return redisClient.get(redis_key)
}

/**
 * set redis cache
 * @param {string} redis_key
 * @param {string} redis_value
 */
function set(redis_key, redis_value) {
  redisClient.setEx(redis_key, 10, redis_value);
  console.log("Success Redis Set", redis_key, redis_value);
}


module.exports = RedisCache