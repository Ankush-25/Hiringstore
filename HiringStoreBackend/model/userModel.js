const {model} = require("mongoose");
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  FullName: {
    type: String,
  },
  ProfileImage: {
    type: String,
    default: "https://www.w3schools.com/howto/img_avatar.png"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['job_seeker', 'employer', 'admin'],
  },
  profile: {
    skills: [String],
    experience: [{
      title: String,
      company: String,
      duration: String
    }],
    education: [{
      degree: String,
      institution: String,
      year: String
    }]
  },
  savedJobs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = new model("profile", ProfileSchema);

module.exports=User;
