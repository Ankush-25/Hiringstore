import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { recommendedJobs } from "../landingpage/Var";
import CarouselComponent from "../components/CarouselComponent";
import JobCard from "../components/JobCard";
import axios from "axios";
import { Api_url } from "../globalConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const RecomendedJobsCrousel = ({ theme = "light" }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        // Try to fetch jobs from API
        const response = await axios.get(`${Api_url}/FeatureJobs/10`);
        
        if (response.data && response.data.jobsCollection) {
          setJobs(response.data.jobsCollection);
        } else {
          // Fallback to mock data if API response is not as expected
          setJobs(recommendedJobs.data);
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
        setError("Failed to load recommended jobs");
        // Use mock data as fallback
        setJobs(recommendedJobs.data);
      } finally {
        setLoading(false);
      }
    };

    // Load saved jobs from localStorage
    const loadSavedJobs = () => {
      const saved = localStorage.getItem('savedJobs');
      if (saved) {
        try {
          setSavedJobs(JSON.parse(saved));
        } catch (e) {
          console.error("Error parsing saved jobs:", e);
        }
      }
    };

    fetchJobs();
    loadSavedJobs();
  }, []);

  const handleJobApply = (job) => {
    // Navigate to job details page or application form
    navigate(`/job/${job._id || job.id}`);
  };

  const handleJobSave = (job, isSaved) => {
    const jobId = job._id || job.id;
    let updatedSavedJobs = [...savedJobs];
    
    if (isSaved) {
      // Add job to saved jobs if not already saved
      if (!updatedSavedJobs.includes(jobId)) {
        updatedSavedJobs.push(jobId);
      }
    } else {
      // Remove job from saved jobs
      updatedSavedJobs = updatedSavedJobs.filter(id => id !== jobId);
    }
    
    setSavedJobs(updatedSavedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(updatedSavedJobs));
  };

  const handleViewAllJobs = () => {
    navigate('/jobs');
  };

  const renderJobCard = (job) => {
    const isJobSaved = savedJobs.includes(job._id || job.id);
    
    return (
      <JobCard 
        data={job}
        onApply={handleJobApply}
        onSave={handleJobSave}
        isSaved={isJobSaved}
        theme={theme}
        compact
      />
    );
  };

  const viewAllButton = (
    <button className="view-all-btn" onClick={handleViewAllJobs}>
      View All <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );

  return (
    <CarouselComponent
      data={jobs}
      renderItem={renderJobCard}
      title="Jobs For You"
      subtitle="Personalized job recommendations based on your profile"
      containerClassName="recommended-jobs jobs-for-you"
      theme={theme}
      actionButton={viewAllButton}
      loading={loading}
      error={error}
    />
  );
};

export default RecomendedJobsCrousel;
