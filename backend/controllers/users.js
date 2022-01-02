const User = require('../models/user.model');

const RedisCache = require("../utils/redisChace");

module.exports = {
  async getPost(req, res) {
    try {


      const redis_key = "MERN-backend-expired";

      const reply = await RedisCache.get(redis_key);


      if (reply) {
        console.log("dari redis")

        // cache available
        res.status(200).send(reply);
      } else {

        console.log("fetching db");
        // get data form db
        const users = await User.find()

        // set redis cache
        RedisCache.set(redis_key, JSON.stringify(users));

        res.status(200).send(users);
      }
    } catch (error) {
      res.status(400).json('Error:' + error)
    }


  },

  async addPost(req, res) {
    try {
      const username = req.body.username;
      const newUser = new User({ username });
      const result = await newUser.save()
      res.json(result)
    } catch (err) {
      //this will eventually be handled by your error handling middleware
      res.status(400).json('Error: ' + err)
    }
  },
  async deletePost(req, res) {
    try {

      const user = await User.findByIdAndDelete(req.params.id)
      res.json(user)
      res.json({ message: "User deleted successfully." })

    }
    catch (err) {
      res.status(400).json('Error: ' + err)
    }
  }
}