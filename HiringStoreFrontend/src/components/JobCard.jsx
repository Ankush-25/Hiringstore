import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faBuilding,
  faMapMarkerAlt,
  faClock,
  faBriefcase,
  faGraduationCap,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkRegular } from "@fortawesome/free-regular-svg-icons";
import "./JobCard.css";

/**
 * JobCard component for displaying job information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - Job data
 * @param {Function} props.onApply - Function to call when apply button is clicked
 * @param {Function} props.onSave - Function to call when save button is clicked
 * @param {boolean} props.isSaved - Whether the job is saved
 * @param {string} props.theme - Theme (light or dark)
 * @param {boolean} props.compact - Whether to show compact view
 */
const JobCard = ({
  data,
  onApply,
  onSave,
  isSaved = false,
  theme = "light",
  compact = false,
}) => {
  const [saved, setSaved] = useState(isSaved);
  
  // Extract job data with fallbacks
  const {
    title = "Job Title",
    company = "Company Name",
    location = "Location",
    jobType = "Full-time",
    category = "Category",
    experienceLevel = "Experience",
    salary = "Competitive",
    postedDate,
    deadline,
    description,
    skillsRequired = [],
  } = data;

  // Calculate time since posting
  const getTimeAgo = (dateString) => {
    if (!dateString) return "";
    
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - postedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    setSaved(!saved);
    if (onSave) onSave(data, !saved);
  };

  const handleApplyClick = (e) => {
    e.stopPropagation();
    if (onApply) onApply(data);
  };

  return (
    <div className={`job-card ${theme} ${compact ? 'compact' : ''}`}>
      <div className="job-card-save" onClick={handleSaveClick}>
        <FontAwesomeIcon 
          icon={saved ? faBookmarkSolid : faBookmarkRegular} 
          className={`save-icon ${saved ? 'saved' : ''}`}
        />
      </div>

      <div className="job-header">
        <div className="job-title">{title}</div>
        <div className="job-badge">{jobType}</div>
      </div>

      <div className="job-details">
        <div className="job-info">
          <FontAwesomeIcon icon={faBuilding} className="job-icon" />
          <span className="job-company">{company}</span>
        </div>
        <div className="job-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="job-icon" />
          <span className="job-location">{location}</span>
        </div>
        {postedDate && (
          <div className="job-info">
            <FontAwesomeIcon icon={faClock} className="job-icon" />
            <span className="job-posted">{getTimeAgo(postedDate)}</span>
          </div>
        )}
      </div>

      {!compact && description && (
        <div className="job-description">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </div>
      )}

      <div className="job-tags">
        {!compact && category && (
          <span className="job-tag">
            <FontAwesomeIcon icon={faBriefcase} className="tag-icon" />
            {category}
          </span>
        )}
        <span className="job-tag">
          <FontAwesomeIcon icon={faGraduationCap} className="tag-icon" />
          {experienceLevel}
        </span>
        {!compact && skillsRequired && skillsRequired.length > 0 && (
          <span className="job-tag skills-tag">
            {`${skillsRequired.length} skills`}
          </span>
        )}
      </div>

      <div className="job-footer">
        <div className="job-salary">{salary}</div>
        <button className="apply-btn" onClick={handleApplyClick}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard; 