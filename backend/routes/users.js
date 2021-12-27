const usersController = require("../controllers/users");
const express = require('express');

// import {getPosts, addPosts, deleteUser} from '../controllers/users.js' 
const router = express.Router();

router.get('/', (req,res) => {
    usersController.getPost(req, res)
});
router.post('/add', (req,res) => {
    usersController.addPost(req, res)
});
router.delete('/:id', (req,res) => {
    usersController.deletePost(req, res)
});


// export default router;
module.exports = router