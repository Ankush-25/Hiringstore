import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faBuilding,
  faMapMarkerAlt,
  faLaptop,
  faGlobe,
  faBriefcase,
  faGraduationCap,
  faClock,
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./UpperSection.css";

// Mock data for remote jobs with experience levels
const mockRemoteJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "RemoteTech Inc.",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    salary: "$90,000 - $120,000/year",
    skills: ["React", "TypeScript", "Node.js", "AWS"],
    posted: "2 days ago"
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "Remote (Global)",
    type: "Contract",
    experience: "3+ years",
    salary: "$70 - $100/hour",
    skills: ["Figma", "Sketch", "UI/UX", "Prototyping"],
    posted: "1 week ago"
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudScale",
    location: "Remote (US)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$110,000 - $150,000/year",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
    posted: "3 days ago"
  },
  {
    id: 4,
    title: "Content Writer",
    company: "ContentMint",
    location: "Remote (Worldwide)",
    type: "Part-time",
    experience: "2+ years",
    salary: "$30 - $50/hour",
    skills: ["Content Writing", "SEO", "Blogging"],
    posted: "5 days ago"
  },
  {
    id: 5,
    title: "Product Manager",
    company: "ProductLabs",
    location: "Remote (EU/NA)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$100,000 - $140,000/year",
    skills: ["Product Strategy", "Agile", "JIRA", "Roadmapping"],
    posted: "1 day ago"
  }
];

const RemoteJobCard = ({ job }) => {
  const navigate = useNavigate();
  
  const handleApplyClick = (e) => {
    e.stopPropagation();
    // Navigate to job application page with job ID
    navigate(`/jobs/${job.id}/apply`);
  };

  return (
    <div className="internship-card">
      <div className="internship-header">
        <div className="internship-title">{job.title}</div>
        <div className="internship-badge">
          <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '5px' }} /> Remote
        </div>
      </div>

      <div className="internship-details">
        <div className="internship-info">
          <FontAwesomeIcon icon={faBuilding} className="internship-icon" />
          <span className="internship-company">{job.company}</span>
        </div>
        <div className="internship-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="internship-icon" />
          <span className="internship-location">{job.location}</span>
        </div>
      </div>

      <div className="internship-tags">
        <span className="internship-tag">
          <FontAwesomeIcon icon={faBriefcase} /> {job.type}
        </span>
        <span className="internship-tag">
          <FontAwesomeIcon icon={faGraduationCap} /> {job.experience}
        </span>
        <span className="internship-tag">
          <FontAwesomeIcon icon={faClock} /> {job.posted || 'Recently'}
        </span>
      </div>

      <div className="internship-skills">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>

      <div className="internship-footer">
        <div className="internship-stipend">{job.salary}</div>
        <button className="apply-btn" onClick={handleApplyClick}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
};

// Custom arrow components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

const RemoteJobsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="internship-section">
      <h2 className="internship-section-title">Remote Jobs</h2>
      <p className="internship-section-subtitle">
        Work from anywhere with these remote job opportunities
      </p>

      <div className="internship-carousel-container">
        <Slider {...settings}>
          {mockRemoteJobs.map((job) => (
            <div key={job.id} className="internship-slide">
              <RemoteJobCard job={job} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="internship-section-footer">
        <button className="view-all-btn">
          View All Remote Jobs
          <FontAwesomeIcon icon={faUpRightFromSquare} style={{ marginLeft: '8px' }} />
        </button>
      </div>
    </section>
  );
};

export default RemoteJobsCarousel;
