import express from 'express';

import Exercise from '../models/exercise.model.js';
const router = express.Router();

export const getExercises = async (req, res, next) => { 
    try {
        const olahragas = await Exercise.find()
        res.json(olahragas);
      } catch (err) {
        //this will eventually be handled by your error handling middleware
        next(err) 
        res.status(400).json('Error:' + err)
      }
}

export const addExercise = async (req, res) => { 
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
}


export const searchExercise = async(req, res) => {
  try {
   const olahraga = await Exercise.findById(req.params.id)
    res.json(olahraga)

    // .then(olahragas => res.json(olahragas))
    // .catch(err => res.status(400).json('Error: ' + err));
  } catch(err) {
      res.status(400).json('Error: ' + err)
  }
}

export const deleteExercise =  async(req, res) => {
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



export default router;