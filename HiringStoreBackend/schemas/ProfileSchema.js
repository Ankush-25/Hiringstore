const { Schema } = require("mongoose");
const ProfileSchema = new Schema({

  fullName: {
    type: String,
    required: true,
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

module.exports = { ProfileSchema };
qq