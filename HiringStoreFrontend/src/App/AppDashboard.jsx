import React, { useEffect, useState } from "react";
import HeroSection from "./DashboardHeroSec/HeroSecDashboard";
import { PopularJobtype } from "../landingpage/LandingPageUppersec/UpperSection/UpperSectionType/upperSecTypeParent";
import RecomendedJobsCrousel from "./RecomendedJob";
import { useAuth } from "../authContext";

function AppDashboard() {
  const [userName, setUserName] = useState("");
  const { currentUser } = useAuth();

  useEffect(() => {
    // Get user's name from auth context or localStorage
    if (currentUser && currentUser.username) {
      setUserName(currentUser.username);
    }
  }, [currentUser]);

  return (
    <div className="dashboard-container">
      <HeroSection userName={userName} />
      
      <PopularJobtype theme="dark" />
      
      <RecomendedJobsCrousel theme="dark" />
    </div>
  );
}

export default AppDashboard;
