import React from 'react';
import CategoryCard from './CategoryCard';
import './CategoryGrid.css';

/**
 * CategoryGrid component for displaying job categories in a grid layout
 * 
 * @param {Object} props - Component props
 * @param {Array} props.categories - Array of category objects
 * @param {string} props.title - Section title
 * @param {string} props.subtitle - Section subtitle
 * @param {string} props.theme - Theme (light or dark)
 * @param {Function} props.onCategoryClick - Function to call when a category is clicked
 */
const CategoryGrid = ({ 
  categories = [],
  title = "Popular Categories",
  subtitle = "Explore jobs by category",
  theme = "light",
  onCategoryClick
}) => {
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

  return (
    <div className={`category-section ${theme}`}>
      <div className="category-section-header">
        <h2 className="category-section-title">{title}</h2>
        {subtitle && <p className="category-section-subtitle">{subtitle}</p>}
      </div>
      
      <div className="category-grid">
        {categories.map((category, index) => (
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
    </div>
  );
};

export default CategoryGrid; 