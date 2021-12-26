// import express from 'express';
const express = require('express');

// import {getPosts, addPosts, deleteUser} from '../controllers/users.js' 
const users = require("../controllers/users");
const router = express.Router();

router.get('/', users.getPosts);
router.post('/add', users.addPosts);
router.delete('/:id', users.deleteUser);


// export default router;
module.exports = router