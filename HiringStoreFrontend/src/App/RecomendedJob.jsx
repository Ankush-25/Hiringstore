import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recommendedJobs } from "../landingpage/Var";

export function ItemsCrousel({CrouselData, CrouselComp}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
const crouselRawdata = Object.entries(CrouselData)
  const CrouselItem = crouselRawdata[1][1]
  console.log(CrouselItem)

  
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

export function CrouselComp({title, company, location}){
  return(
    <div className="singleCrouselDiv">
      Job Role = {title}
      Company = {company}
      location = {location}
    </div>
  )
}

 

export default function RecomendedJobsCrousel() {
  
    return ( 
        <div>
            <ItemsCrousel CrouselData={recommendedJobs}  CrouselComp =  {CrouselComp}/>
        </div>
     );
}

