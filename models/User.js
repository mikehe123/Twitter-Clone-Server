const { model, Schema } = require("mongoose");
//we don't have required because we can have graph to do that for us. Instead of doing that in mongoose
const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
