import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryCard.css';

/**
 * CategoryCard component for displaying job categories
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Category title
 * @param {React.ReactNode} props.icon - Category icon
 * @param {string} props.count - Number of jobs in this category
 * @param {string} props.theme - Theme (light or dark)
 * @param {string} props.color - Accent color for the card
 * @param {Function} props.onClick - Function to call when card is clicked
 */
const CategoryCard = ({ 
  title, 
  icon, 
  count = '1000+', 
  theme = 'light',
  color = '#8e44ad',
  onClick
}) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick(title);
    } else {
      // Default behavior: navigate to jobs page with category filter
      navigate(`/jobs?category=${encodeURIComponent(title)}`);
    }
  };

  // Generate gradient based on color
  const generateGradient = (baseColor) => {
    // Simple function to lighten a hex color
    const lightenColor = (color, percent) => {
      const num = parseInt(color.slice(1), 16);
      const amt = Math.round(2.55 * percent);
      const R = (num >> 16) + amt;
      const G = (num >> 8 & 0x00FF) + amt;
      const B = (num & 0x0000FF) + amt;
      return `#${(1 << 24 | (R < 255 ? R < 1 ? 0 : R : 255) << 16 | (G < 255 ? G < 1 ? 0 : G : 255) << 8 | (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)}`;
    };
    
    return `linear-gradient(135deg, ${baseColor}, ${lightenColor(baseColor, 20)})`;
  };

  const cardStyle = {
    background: generateGradient(color),
  };

  return (
    <div 
      className={`category-card ${theme}`} 
      style={cardStyle}
      onClick={handleClick}
    >
      <div className="category-icon">{icon}</div>
      <div className="category-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-count">{count} jobs</p>
      </div>
    </div>
  );
};

export default CategoryCard; 