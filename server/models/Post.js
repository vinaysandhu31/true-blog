import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String }, // Accepting image URL
  author: {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    username: { type: String },
  },
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

export default Post; // ✅ Now using ES Module export
