import HeroSection from "./DashboardHeroSec/HeroSecDashboard";
import { PopularJobtype } from "../landingpage/LandingPageUppersec/UpperSection/UpperSectionType/upperSecTypeParent";
import RecomendedJobsCrousel from "./RecomendedJob";
function AppDashboard() {
  return (
    <>
      <HeroSection />
      <div className="JobtypeOuter">
        <PopularJobtype />
      </div>
      <div className="crouselTitle">Jobs For You</div>
      <RecomendedJobsCrousel />
    </>
  );
}

export default AppDashboard;
