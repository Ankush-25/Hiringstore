import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recommendedJobs } from "../landingpage/Var";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
  const crouselRawdata = Object.entries(CrouselData);
  const CrouselItem = crouselRawdata[0][1];
  
  

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {CrouselItem.map((recomJob, index) => (
          <CrouselComp
            key={index}
            title={recomJob.title}
            company={recomJob.company}
            location={recomJob.location}
          />
        ))}
      </Slider>
    </div>
  );
}

export function CrouselComp({ title, company, location }) {
  const HandleApplyclick = () => {
    return null;
  };
  return (
    <div className="singleCrouselContainer">
      <div className="singleCrouselDiv">
        <div> Job Role: {title} </div>
        <div> Company: {company} </div>
        <div> Location: {location} </div>
      </div>
      <div className="ApplyButtonContainer">
        <button className="ApplyButton" onClick={HandleApplyclick}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
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
