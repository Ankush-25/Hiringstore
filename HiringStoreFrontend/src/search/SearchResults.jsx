import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpRightFromSquare,
  faBuilding,
  faMapMarkerAlt,
  faFilter,
  faSearch,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import '../App/App.css';
import './SearchResults.css';

const SearchResults = () => {
  const [searchResults, setSearchResults] = useState({ jobs: [], count: 0 });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    jobType: '',
    category: '',
    experienceLevel: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve search results from localStorage
    const results = localStorage.getItem('jobSearchResults');
    
    if (results) {
      try {
        const parsedResults = JSON.parse(results);
        setSearchResults(parsedResults);
      } catch (error) {
        console.error('Error parsing search results:', error);
      }
    }
    
    setLoading(false);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    // Filter logic would go here in a real implementation
    // For now, we'll just toggle the filter panel
    setShowFilters(false);
  };

  const handleBackToSearch = () => {
    navigate('/');
  };

  const filteredJobs = searchResults.jobs.filter((job) => {
    if (filters.jobType && job.jobType !== filters.jobType) return false;
    if (filters.category && job.category !== filters.category) return false;
    if (filters.experienceLevel && job.experienceLevel !== filters.experienceLevel) return false;
    return true;
  });

  if (loading) {
    return <div className="loading-container">Loading search results...</div>;
  }

  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <button className="back-button" onClick={handleBackToSearch}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back to Search</span>
        </button>
        <h1>Search Results</h1>
        <button 
          className="filter-toggle-button" 
          onClick={() => setShowFilters(!showFilters)}
        >
          <FontAwesomeIcon icon={faFilter} />
          <span>Filters</span>
        </button>
      </div>

      <div className="search-results-content">
        {showFilters && (
          <div className="filter-panel">
            <h3>Filter Results</h3>
            
            <div className="filter-group">
              <label>Job Type</label>
              <select 
                name="jobType" 
                value={filters.jobType} 
                onChange={handleFilterChange}
              >
                <option value="">All Types</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Freelance">Freelance</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Category</label>
              <select 
                name="category" 
                value={filters.category} 
                onChange={handleFilterChange}
              >
                <option value="">All Categories</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="filter-group">
              <label>Experience Level</label>
              <select 
                name="experienceLevel" 
                value={filters.experienceLevel} 
                onChange={handleFilterChange}
              >
                <option value="">All Levels</option>
                <option value="Entry">Entry</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
                <option value="Executive">Executive</option>
              </select>
            </div>
            
            <button className="apply-filters-btn" onClick={applyFilters}>
              Apply Filters
            </button>
          </div>
        )}

        <div className="search-results-list">
          <div className="results-summary">
            Found <span className="results-count">{filteredJobs.length}</span> jobs
          </div>
          
          {filteredJobs.length === 0 ? (
            <div className="no-results">
              <FontAwesomeIcon icon={faSearch} className="no-results-icon" />
              <h3>No matching jobs found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div className="job-card search-result-card" key={job._id}>
                <div className="job-header">
                  <div className="job-title">{job.title}</div>
                  {job.isActive && <div className="job-badge">Active</div>}
                </div>

                <div className="job-details">
                  <div className="job-info">
                    <FontAwesomeIcon icon={faBuilding} className="job-icon" />
                    <span className="job-company">{job.company}</span>
                  </div>
                  <div className="job-info">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="job-icon" />
                    <span className="job-location">{job.location}</span>
                  </div>
                </div>

                <div className="job-description">
                  {job.description && job.description.length > 150
                    ? `${job.description.substring(0, 150)}...`
                    : job.description}
                </div>

                <div className="job-tags">
                  <span className="job-tag">{job.jobType}</span>
                  <span className="job-tag">{job.category}</span>
                  <span className="job-tag">{job.experienceLevel}</span>
                </div>

                <div className="job-footer">
                  <div className="job-salary">{job.salary ? `$${job.salary}` : 'Salary not specified'}</div>
                  <button className="apply-btn">
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                    <span>Apply Now</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults; 