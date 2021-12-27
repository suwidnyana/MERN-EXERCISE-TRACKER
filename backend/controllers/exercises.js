// import Exercise from '../models/exercise.model.js';
const Exercise = require('../models/exercise.model');

const RedisCache = require("../utils/redisChace");
module.exports = {
  async getExercises (req, res, next)  { 
    try { 
      
    console.log("Success fetch from database");
        
    const redis_key = "MERN-olahraga";
  
    const { reply } = await RedisCache.get(redis_key);
  
    if (reply) {
      // cache available
      res.status(200).send(reply);  
    } else {
      // get data form db
      const olahragas = await Exercise.find()
  
      // set redis cache
      RedisCache.set(redis_key, JSON.stringify(olahragas));
  
      res.status(200).send(olahragas);
    }
        
      } catch (err) {
        //this will eventually be handled by your error handling middleware
        next(err) 
        res.status(400).json('Error:' + err)
      }
  },

  async addExercise (req, res)  { 
    try {
        const username = req.body.username;
        const description = req.body.description;
        const duration = Number(req.body.duration);
        const date = Date.parse(req.body.date);

        const newOlahraga = new Exercise({
          username,
          description,
          duration,
          date,
          });
        const result  = await newOlahraga.save()
        res.json(result)
    } catch (err) {
      //this will eventually be handled by your error handling middleware
      res.status(400).json('Error: ' + err)
    }
},
async searchExercise (req, res)  {
  try {
   const olahraga = await Exercise.findById(req.params.id)
    res.json(olahraga)

    // .then(olahragas => res.json(olahragas))
    // .catch(err => res.status(400).json('Error: ' + err));
  } catch(err) {
      res.status(400).json('Error: ' + err)
  }
},

async deleteExercise (req, res)  {
  try {

    const olahraga = await Exercise.findByIdAndDelete(req.params.id)
    res.json(olahraga)
    res.json({ message: "Post deleted successfully." })
    // const { id } = req.params;

    // if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    // await PostMessage.findByIdAndRemove(id);

    // res.json({ message: "Post deleted successfully." });
    // olahraga.findByIdAndDelete(req.params.id)
    // .then(() => res.json(`olahraga dihapus`))
  }
  catch(err) {
    res.status(400).json('Error: ' + err)
  }
}

}





