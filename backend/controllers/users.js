import express from 'express';

import User from '../models/user.model.js';
const router = express.Router();

export const getPosts = async (req, res, next) => { 
    try {
        const users = await User.find()
        res.json(users);
      } catch (err) {
        //this will eventually be handled by your error handling middleware
        next(err) 
        res.status(400).json('Error:' + err)
      }
}

export const addPosts = async (req, res) => { 
    try {
        const username = req.body.username;
        const newUser = new User({username});       
        const result  = await newUser.save()
        res.json(result)
    } catch (err) {
      //this will eventually be handled by your error handling middleware
      res.status(400).json('Error: ' + err)
    }
}

export const deleteUser =async(req, res) => {
  try {

    const user = await User.findByIdAndDelete(req.params.id)
    res.json(user)
    res.json({ message: "User deleted successfully." })
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