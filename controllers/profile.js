const User = require("../models/user")

const ProfileController = {
  Index: (req, res) => {
    const email = req.params.email;
    if(!email){ email = req.session.user.email}
    User.findOne({email: email})
      .populate('friends')
      .exec((err, user) => {
        if(err){
          console.log(err)
          throw err;
        }else{
          if(!user){
            console.log(`the user with the email ${email}, cannot be found`)
          }else{
            const username = user.username
            const name = user.name
            res.render("profile/index", {name: name, username: username });
          }
        }
      })
  },

  Find: (req, res)=>{
    const email = req.session.user.email
    res.redirect(`/profile/${email}`)
  },
  
};

module.exports = ProfileController;