const Job = require("../model/jobModel.js");
const { EJSON } = require('bson');

const PostJob = async (req, res) => {
  const user = req.user.ID;
  // Implementation to be completed
};

const TPostJob = async (req, res) => {
  try {
    // Parse the request body using EJSON if it's in MongoDB Extended JSON format
    const parsedBody = EJSON.parse(JSON.stringify(req.body));
    
    const newJob = new Job({
      ...parsedBody,
      createdAt: parsedBody.createdAt || Date.now(),
      applications: parsedBody.applications || [],
      isActive: parsedBody.isActive !== undefined ? parsedBody.isActive : true
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ 
      error: "Failed to create job",
      details: error.message 
    });
  }
};

const FeaturedJob = async (req, res) => {
  const jobNo = req.params.NO || 5;
  if (!jobNo || jobNo <= 0) {
    return res.status(404).json({
      message: "Job number is not specified or found",
    });
  }
  //change some fetching details of featured jobs based on the application
  try {
    const jobsCollection = await Job.find().limit(jobNo);
    if (!jobsCollection || jobsCollection.length === 0) {
      return res.status(404).json("No Jobs Found");
    }
    res
      .status(200)
      .json(
        { message: "Successfully Fetched the Fetured Jobs", jobsCollection }
      );
  } catch (error) {
    console.error("Unable to fetch featured JObs due to :", error);
    res.status(500).json("Internal Server Error!");
  }
};

const searchJobs = async (req, res) => {
  try {
    const { query, experience, location } = req.query;
    
    // Build search criteria
    const searchCriteria = { isActive: true };
    
    if (query) {
      searchCriteria.$or = [
        { title: { $regex: query, $options: 'i' } },
        { company: { $regex: query, $options: 'i' } },
        { skillsRequired: { $in: [new RegExp(query, 'i')] } }
      ];
    }
    
    if (experience) {
      searchCriteria.experienceLevel = { $regex: experience, $options: 'i' };
    }
    
    if (location) {
      searchCriteria.location = { $regex: location, $options: 'i' };
    }
    
    // Execute search query
    const jobs = await Job.find(searchCriteria)
      .sort({ createdAt: -1 })
      .limit(50);
    
    if (!jobs || jobs.length === 0) {
      return res.status(200).json({ 
        message: "No matching jobs found", 
        jobs: [] 
      });
    }
    
    res.status(200).json({
      message: "Jobs found successfully",
      count: jobs.length,
      jobs
    });
    
  } catch (error) {
    console.error("Error searching jobs:", error);
    res.status(500).json({
      error: "Failed to search jobs",
      details: error.message
    });
  }
};

module.exports = {
  PostJob,
  TPostJob,
  FeaturedJob,
  searchJobs
};
