const {model} = require("mongoose");

const {ProfileSchema} = require('..schemas/ProfileSchema.js')

const ProfilesModel = new model("profile", ProfileSchema);

module.exports={ProfilesModel};
