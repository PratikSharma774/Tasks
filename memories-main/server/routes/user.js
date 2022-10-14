import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
// routing for sign up signin
router.post("/signin", signin);
router.post("/signup", signup);

export default router;