const RedisClient = require("redis").createClient;

const RedisCon = RedisClient(6379, "localhost");

module.exports = RedisCon
module.exports = RedisClient