import Post from '../models/Post.js';

// Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, content, image, author } = req.body;

    const newPost = new Post({ title, content, image, author });
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single post by ID
export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update post by ID
export const updatePost = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, image },
      { new: true }
    );

    if (!updatedPost) return res.status(404).json({ error: 'Post not found' });

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete post by ID
export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Post not found' });

    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
