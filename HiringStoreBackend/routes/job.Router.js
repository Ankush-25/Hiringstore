const express = require('express');
const jobRouter = express.Router();
const jobController = require('../controllers/jobsController.js');
const { protect, employer } = require('../middleware/authMiddleware');

// Public routes
jobRouter.get('/FeatureJobs/:NO', jobController.FeaturedJob);
jobRouter.get('/searchJobs', jobController.searchJobs);

// Protected routes - require authentication
// jobRouter.get()
jobRouter.post('/postJob/:ID', protect, employer, jobController.PostJob);
jobRouter.post('/postJob/', protect, employer, jobController.TPostJob);

// Commented routes for future implementation
// jobRouter.get('/getJobs', jobController.getJobs);
// jobRouter.get('/getJob/:id', jobController.getJobById);
// jobRouter.delete('/deleteJob/:id', protect, employer, jobController.deleteJob);
// jobRouter.put('/updateJob/:id', protect, employer, jobController.updateJob);

module.exports = jobRouter;
