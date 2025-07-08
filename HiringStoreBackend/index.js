const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require('http');
const bodyParser = require("body-parser");
const mainRouter = require("./routes/main.router");
dotenv.config();

function startServer() {
  const PORT = process.env.PORT || 5000;
  const MONGO_DB_URI = process.env.MONGO_URL;

  app.use(bodyParser.json());
  app.use(express.json());

  mongoose
    .connect(MONGO_DB_URI)
    .then(() => console.log("The Mongo Database is connected "))
    .catch((error) =>
      console.log("The Mongo database is not connected successfully")
    );
  console.log("Server Has Started!");
    
  // change this while setuping the production
  app.use(cors({origin:"*"}))
    
  app.use("/",mainRouter);

  const httpServer = http.createServer(app)

  httpServer.listen(PORT, () => {
    console.log("The Application is Started at",PORT);
  });
}
