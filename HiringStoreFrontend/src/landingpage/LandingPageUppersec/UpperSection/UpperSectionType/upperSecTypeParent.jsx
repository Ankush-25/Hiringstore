import React from 'react';
import { useNavigate } from 'react-router-dom';
import { jobCategories } from '../../../Var.jsx';
import CollapsibleCategoryGrid from '../../../../components/CollapsibleCategoryGrid';
import './upperSecType.css';

export function PopularJobtype({ theme = 'light' }) {
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryTitle) => {
    // Navigate to jobs page with category filter
    navigate(`/jobs?category=${encodeURIComponent(categoryTitle)}`);
  };

  return (
    <CollapsibleCategoryGrid 
      categories={jobCategories}
      title="Popular Categories"
      subtitle="Explore thousands of jobs in popular categories"
      theme={theme}
      onCategoryClick={handleCategoryClick}
      initialVisibleCount={8}
    />
  );
}

// Keep the SingleJobBox component for backward compatibility
export function SingleJobBox({ designation, desigLogo }) {
  return (
    <div className="single-job-box">
      <div className="single-job-content">
        {desigLogo}
        <span className="designation">{designation}</span>
      </div>
    </div>
  );
}