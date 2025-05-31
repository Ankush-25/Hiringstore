import {
  HeroSecbuttonCon,
  HeroSecImage,
  HeroSecWrapper,
  HerSecButtons,
} from "./HeroSecDashboardStyles";
import "./HeroSec.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PopularJobtype } from "../../landingpage/LandingPageUppersec/UpperSection/UpperSectionType/upperSecTypeParent";
function HeroSection() {
  const handleNavigation = 23;
  return (
    <HeroSecWrapper>
      <HeroSecbuttonCon>
        <div class="HerosecTextLines">
          <h1>Begin Your Journey</h1>
          <p>Apply from Here and Get Hired</p>
        </div>
        <div class="HerosecButtons">
          <HerSecButtons onClick={handleNavigation}>Find Jobs</HerSecButtons>
          <HerSecButtons onClick={handleNavigation}>
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
