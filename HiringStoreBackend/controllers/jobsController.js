import Job from "../model/jobModel.js";

export const PostJob = async (req, res) => {
  const user = req.user.ID;
};import { EJSON } from 'bson';

export const TPostJob = async (req, res) => {
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

export const FeaturedJob = async (req, res) => {
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
        { message: "Successfully Fetched the Fetured Jobs",jobsCollection }
      );
  } catch (error) {
    console.error("Unable to fetch featured JObs due to :", error);
    res.status(500).json("Internal Server Error!");
  }
};
