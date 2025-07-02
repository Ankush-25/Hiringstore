require('dotenv').config();


const express = require("express");
const app = express();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL; 

app.listen(PORT,()=>{
    console.log("The Application is Started");
    console.log("MongoDB conected");
    mongoose.connect(uri);
})