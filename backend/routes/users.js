import express from 'express';

import {getPosts, addPosts, deleteUser} from '../controllers/users.js' 

const router = express.Router();

router.get('/', getPosts);
router.post('/', addPosts);
router.delete('/:id', deleteUser);


export default router;