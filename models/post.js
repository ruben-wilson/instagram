const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  
  message: String,
  image: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
