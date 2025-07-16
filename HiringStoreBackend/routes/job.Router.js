const express = require('express');
const jobRouter = express.Router();
const jobController = require('../controllers/jobsController.js');


//who is posting the job with id 
jobRouter.post('/postJob/:ID', jobController.PostJob);
jobRouter.get('/FeatureJobs/:NO', jobController.FeaturedJob);

jobRouter.post('/postJob/', jobController.TPostJob);
// jobRouter.get('/getJobs', jobController.getJobs);
// jobRouter.get('/getJob/:id', jobController.getJobById);
// jobRouter.delete('/deleteJob/:id', jobController.deleteJob);
// jobRouter.put('/updateJob/:id', jobController.updateJob);
module.exports = jobRouter;
