const { ImgurClient } = require('imgur');
const Post = require("../models/post");

const client = new ImgurClient({ clientId: 'c210e55e116acae' });

const PostsController = {
  
  Index: (req, res) => {
    Post.find((err, posts) => {
      if (err) {
        throw err;
      }

      res.render("posts/index", { posts: posts });
    });
  },

  New: (req, res) => {
    res.render("posts/new", {});
  },

  Create: async(req, res) => {
    try {
      const image_data = req.files.image.data;
      const response = await client.upload({
        image: image_data,
        type: 'buffer',
      });
      const url = response.data.link
      const post = new Post({
        message: req.body.message,
        image: url,
        user_id: req.session.user._id
  
      })
      await post.save((err)=>{
        if(err){
          throw err;
        }
      })
      res.redirect(`/posts`);
  } catch (err) {
      res.status(500)
  }
  },

};

module.exports = PostsController;
