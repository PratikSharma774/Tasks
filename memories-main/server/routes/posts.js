import express from "express";
import auth from '../middleware/auth.js'
// authorizing and routinfg 
import { getPosts,createPost, updatePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/',auth, createPost);
// router.get('/:id', getPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
export default router;
