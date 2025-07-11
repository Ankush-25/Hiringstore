const express = require('express');
const jobRouter = express.Router();
const jobController = require('../controllers/jobController');

jobRouter.post('/postJob', jobController.postJob);
// jobRouter.get('/getJobs', jobController.getJobs);
// jobRouter.get('/getJob/:id', jobController.getJobById);
// jobRouter.delete('/deleteJob/:id', jobController.deleteJob);
// jobRouter.put('/updateJob/:id', jobController.updateJob);
module.exports = jobRouter;
