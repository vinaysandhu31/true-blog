import express from "express";
import {
  create,
  getposts,
  deletepost,
  updatepost,
} from "../controllers/post.controller.js";
import { verifyToken } from "../utils/verifyUser.js"; // assuming you have auth middleware

const router = express.Router();

// CREATE a post (admin only)
router.post("/", verifyToken, create);

// GET all posts with optional filters
router.get("/getposts", getposts);

// UPDATE a post (admin only, must match userId)
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);

// DELETE a post (admin only, must match userId)
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

// router.post("/create", verifyToken, create);

export default router;
