import {
  HeroSecbuttonCon,
  HeroSecImage,
  HeroSecWrapper,
  HerSecButtons,
} from "./HeroSecDashboardStyles";
import "./HeroSec.css";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopularJobtype } from "../../landingpage/LandingPageUppersec/UpperSection/UpperSectionType/upperSecTypeParent";


function HeroSection({ userName }) {
  const handleFindJobs = () => {
    window.location.href = "/jobs";
  };

  const handlePublishJob = () => {
    window.location.href = "/publish-job";
  };

  return (
    <HeroSecWrapper>
      <HeroSecbuttonCon>
        <div className="HerosecTextLines">
          <h1>{userName ? `Welcome, ${userName}!` : 'Begin Your Journey'}</h1>
          <p>Apply from Here and Get Hired</p>
        </div>
        <div className="HerosecButtons">
          <HerSecButtons onClick={handleFindJobs}>
            <FontAwesomeIcon icon={faSearch} style={{ marginRight: "8px" }} />
            Find Jobs
          </HerSecButtons>
          <HerSecButtons onClick={handlePublishJob}>
            <FontAwesomeIcon icon={faPlus} style={{ marginRight: "8px" }} />
            Publish Job
          </HerSecButtons>
        </div>
      </HeroSecbuttonCon>

      <HeroSecImage
        src="/public/media/HeroSection Image.png"
        alt="Hero Section Image"
      />
    </HeroSecWrapper>
  );
}

export default HeroSection;
