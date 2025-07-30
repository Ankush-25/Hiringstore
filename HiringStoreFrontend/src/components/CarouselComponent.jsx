import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../App/App.css";
import "./CarouselComponent.css";

/**
 * Custom arrow component for the next button in the carousel
 */
function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={`custom-arrow next-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} color="#fff" />
    </div>
  );
}

/**
 * Custom arrow component for the previous button in the carousel
 */
function PreviousArrow({ className, style, onClick }) {
  return (
    <div
      className={`custom-arrow prev-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} color="#fff" />
    </div>
  );
}

/**
 * Centralized carousel component that can be reused across the application
 * 
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of items to display in the carousel
 * @param {Function} props.renderItem - Function to render each item
 * @param {string} props.title - Optional title for the carousel section
 * @param {string} props.subtitle - Optional subtitle for the carousel section
 * @param {Object} props.customSettings - Optional custom settings for the carousel
 * @param {string} props.containerClassName - Optional class name for the container
 * @param {string} props.theme - Optional theme (light or dark)
 * @param {Function} props.onItemClick - Optional callback for when an item is clicked
 * @param {React.ReactNode} props.actionButton - Optional action button to display
 */
const CarouselComponent = ({
  data = [],
  renderItem,
  title,
  subtitle,
  customSettings = {},
  containerClassName = "",
  theme = "light",
  onItemClick,
  actionButton,
}) => {
  // Default settings for the carousel
  const defaultSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Merge default settings with custom settings
  const settings = { ...defaultSettings, ...customSettings };

  // Handle empty data
  if (data.length === 0) {
    return (
      <div className={`carousel-section ${theme} ${containerClassName}`}>
        {title && <h2 className="carousel-title">{title}</h2>}
        {subtitle && <p className="carousel-subtitle">{subtitle}</p>}
        <div className="carousel-empty">
          <p>No items to display</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`carousel-section ${theme} ${containerClassName}`}>
      {title && (
        <div className="carousel-header">
          <h2 className="carousel-title">{title}</h2>
          {actionButton && <div className="carousel-action">{actionButton}</div>}
        </div>
      )}
      
      {subtitle && <p className="carousel-subtitle">{subtitle}</p>}
      
      <div className="carousel-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div 
              key={item.id || item._id || index} 
              className="carousel-slide"
              onClick={() => onItemClick && onItemClick(item)}
            >
              {renderItem(item)}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent; 