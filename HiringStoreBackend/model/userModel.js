const {model} = require("mongoose");
const { Schema } = require("mongoose");
const ProfileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = new model("profile", ProfileSchema);

module.exports={User};
