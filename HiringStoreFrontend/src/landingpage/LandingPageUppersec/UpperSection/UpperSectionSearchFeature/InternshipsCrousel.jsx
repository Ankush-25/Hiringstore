import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { Api_url } from "../../../../globalConfig.js";
import { internships } from "../../../Var";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faBuilding,
  faMapMarkerAlt,
  faClock,
  faGraduationCap,
  faCalendarAlt,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./UpperSection.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
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

function PreviousArrow(props) {
  const { className, style, onClick } = props;
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

function InternshipCard({ data }) {
  const handleApplyClick = () => {
    // Handle application logic here
    console.log("Applied for internship:", data.title);
  };

  return (
    <div className="internship-card">
      <div className="internship-header">
        <div className="internship-title">{data.title}</div>
        <div className="internship-badge">Internship</div>
      </div>

      <div className="internship-details">
        <div className="internship-info">
          <FontAwesomeIcon icon={faBuilding} className="internship-icon" />
          <span className="internship-company">{data.company}</span>
        </div>
        <div className="internship-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="internship-icon" />
          <span className="internship-location">{data.location}</span>
        </div>
        {data.duration && (
          <div className="internship-info">
            <FontAwesomeIcon icon={faClock} className="internship-icon" />
            <span className="internship-duration">{data.duration || "3-6 months"}</span>
          </div>
        )}
      </div>

      <div className="internship-tags">
        <span className="internship-tag">
          <FontAwesomeIcon icon={faGraduationCap} /> {data.education || "Undergraduate"}
        </span>
        <span className="internship-tag">
          <FontAwesomeIcon icon={faCalendarAlt} /> {data.type || "Full-time"}
        </span>
      </div>

      <div className="internship-footer">
        <div className="internship-stipend">{data.stipend || "₹15,000 - ₹25,000/month"}</div>
        <button className="apply-btn" onClick={handleApplyClick}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
}

export function InternshipsCrousel() {
  const [internshipData, setInternshipData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try to fetch from API first
        const response = await axios.get(`${Api_url}/FeatureJobs/10`);
        if (response && response.data && response.data.jobsCollection) {
          setInternshipData(response.data.jobsCollection);
        } else {
          // Fallback to mock data if API fails
          setInternshipData(internships.internships);
        }
      } catch (err) {
        console.error("Failed to fetch internships:", err);
        // Use mock data as fallback
        setInternshipData(internships.internships);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  if (loading) {
    return (
      <div className="internship-section">
        <h2 className="internship-section-title">Latest Internships</h2>
        <div className="internship-loading">Loading internships...</div>
      </div>
    );
  }

  return (
    <div className="internship-section">
      <h2 className="internship-section-title">Latest Internships</h2>
      <p className="internship-section-subtitle">
        Kickstart your career with these exciting internship opportunities
      </p>
      
      <div className="internship-carousel-container">
        <Slider {...settings}>
          {internshipData.map((internship, index) => (
            <div key={internship.id || index} className="internship-slide">
              <InternshipCard data={internship} />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="internship-section-footer">
        <button className="view-all-btn">
          View All Internships
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </button>
      </div>
    </div>
  );
}
