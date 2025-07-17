import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recommendedJobs } from "../landingpage/Var";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightFromSquare,
  faBuilding,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow next-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`custom-arrow prev-arrow ${className}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
export function ItemsCrousel({ CrouselData, CrouselComp }) {
  var settings = {
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {CrouselData.map((recomJob, index) => (
          <CrouselComp key={index} data={recomJob} />
        ))}
      </Slider>
    </div>
  );
}

export function CrouselComp({ data }) {
  const HandleApplyclick = () => {
    return null;
  };
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="job-title">{data.title}</div>
        <div className="job-badge">Featured</div>
      </div>

      <div className="job-details">
        <div className="job-info">
          <FontAwesomeIcon icon={faBuilding} className="job-icon" />
          <span className="job-company">{data.company}</span>
        </div>
        <div className="job-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="job-icon" />
          <span className="job-location">{data.location}</span>
        </div>
      </div>

      <div className="job-tags">
        <span className="job-tag">{data.jobType}</span>
        <span className="job-tag">{data.category}</span>
        <span className="job-tag">{data.experienceLevel}</span>
      </div>

      <div className="job-footer">
        <div className="job-salary">{data.salary}</div>
        <button className="apply-btn" onClick={HandleApplyclick}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
}

export default function RecomendedJobsCrousel() {
  return (
    <div className="jobsSecContainer">
      <ItemsCrousel CrouselData={recommendedJobs} CrouselComp={CrouselComp} />
    </div>
  );
}
