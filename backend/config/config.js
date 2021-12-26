require('dotenv').config()

module.exports = {
  redis: {
    port: process.env.RD_PORT || 6379,
    host: process.env.RD_HOST,
    
  },
  
}