import React, { useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import './CollapsibleCategoryGrid.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

/**
 * CollapsibleCategoryGrid component for displaying job categories in a grid layout
 * with collapse/expand functionality
 * 
 * @param {Object} props - Component props
 * @param {Array} props.categories - Array of category objects
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.theme - Theme (light or dark)
 * @param {Function} props.onCategoryClick - Function to call when a category is clicked
 * @param {number} props.initialVisibleCount - Number of categories to show when collapsed (default: 6)
 */
const CollapsibleCategoryGrid = ({ 
  categories = [],
  title = "Popular Categories",
  subtitle = "Explore jobs by category",
  theme = "light",
  onCategoryClick,
  initialVisibleCount = 6
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  
  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Adjust visible count based on screen width
      if (window.innerWidth <= 480) {
        setVisibleCount(3); // Show fewer items on mobile
      } else if (window.innerWidth <= 768) {
        setVisibleCount(4); // Show more on tablets
      } else {
        setVisibleCount(initialVisibleCount); // Default for larger screens
      }
    };
    
    // Initial call
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [initialVisibleCount]);
  
  // Array of colors for the category cards
  const categoryColors = [
    '#8e44ad', // Purple
    '#3498db', // Blue
    '#e74c3c', // Red
    '#2ecc71', // Green
    '#f39c12', // Orange
    '#1abc9c', // Teal
    '#d35400', // Dark Orange
    '#16a085', // Dark Teal
    '#c0392b', // Dark Red
    '#2980b9', // Dark Blue
    '#27ae60', // Dark Green
    '#f1c40f', // Yellow
  ];

  // Toggle expand/collapse state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine which categories to display
  const displayedCategories = isExpanded 
    ? categories 
    : categories.slice(0, visibleCount);

  return (
    <div className={`category-section ${theme}`}>
      <div className="category-section-header">
        <h2 className="category-section-title">{title}</h2>
        {subtitle && <p className="category-section-subtitle">{subtitle}</p>}
      </div>
      
      <div className={`category-grid ${isExpanded ? 'expanded' : 'collapsed'}`}>
        {displayedCategories.map((category, index) => (
          <CategoryCard
            key={category.id || index}
            title={category.title}
            icon={category.icon}
            count={category.count}
            theme={theme}
            color={categoryColors[index % categoryColors.length]}
            onClick={onCategoryClick}
          />
        ))}
      </div>
      
      {categories.length > visibleCount && (
        <div className="toggle-container">
          <button 
            className={`toggle-button ${theme}`} 
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Show less categories" : "Show more categories"}
          >
            <span>{isExpanded ? "Show Less" : "Show More"}</span>
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCategoryGrid; 