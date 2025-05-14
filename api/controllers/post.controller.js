import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

// Create a new post
export const create = async (req, res, next) => {
  try {
    if (!req.user?.isAdmin) {
      return next(errorHandler(403, "You are not allowed to create a post"));
    }

    const { title, content, category, image } = req.body;
    if (!title || !content || !category || !image) {
      return next(errorHandler(400, "Please provide all required fields"));
    }

    const slug = title
      .toLowerCase()
      .split(" ")
      .join("-")
      .replace(/[^a-z0-9-]/g, "");

    const newPost = new Post({
      title,
      content,
      category,
      image,
      slug,
      userId: req.user.id,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};

// Get posts with filters, pagination, search, etc.
export const getposts = async (req, res, next) => {
  try {
    const {
      startIndex = 0,
      limit = 9,
      order = "desc",
      userId,
      category,
      slug,
      postId,
      searchTerm,
    } = req.query;

    const filters = {
      ...(userId && { userId }),
      ...(category && { category }),
      ...(slug && { slug }),
      ...(postId && { _id: postId }),
    };

    if (searchTerm) {
      filters.$or = [
        { title: { $regex: searchTerm, $options: "i" } },
        { content: { $regex: searchTerm, $options: "i" } },
      ];
    }

    const posts = await Post.find(filters)
      .sort({ updatedAt: order === "asc" ? 1 : -1 })
      .skip(parseInt(startIndex))
      .limit(parseInt(limit));

    const totalPosts = await Post.countDocuments();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const lastMonthPosts = await Post.countDocuments({
      createdAt: { $gte: oneMonthAgo },
    });

    res.status(200).json({
      posts,
      totalPosts,
      lastMonthPosts,
    });
  } catch (error) {
    next(error);
  }
};

// Delete a post
export const deletepost = async (req, res, next) => {
  try {
    if (!req.user?.isAdmin || req.user.id !== req.params.userId) {
      return next(errorHandler(403, "You are not allowed to delete the post"));
    }

    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json("The post has been deleted");
  } catch (error) {
    next(error);
  }
};

// Update a post
export const updatepost = async (req, res, next) => {
  try {
    if (!req.user?.isAdmin || req.user.id !== req.params.userId) {
      return next(errorHandler(403, "You are not allowed to update this post"));
    }

    const { title, content, category, image } = req.body;

    const updateData = {
      title,
      content,
      category,
      image,
    };

    if (title) {
      updateData.slug = title
        .toLowerCase()
        .split(" ")
        .join("-")
        .replace(/[^a-z0-9-]/g, "");
    }

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.postId,
      { $set: updateData },
      { new: true }
    );

    if (!updatedPost) {
      return next(errorHandler(404, "Post not found"));
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};
