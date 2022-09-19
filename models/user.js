const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  username: { type: String, unique: true },
  name: String,
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
