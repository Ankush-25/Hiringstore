const express = require('express');
const userRouter = require('./user.router');
const jobRouter = require('./job.Router');
const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(jobRouter);

mainRouter.get('/',(req, res)=>(
    res.send("Welcome to HiringStores!"))
);

module.exports = mainRouter;