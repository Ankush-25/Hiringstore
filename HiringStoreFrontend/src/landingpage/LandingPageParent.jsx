import { Footerbody } from "./LandingPageLowersec/FooterSec";
import { MidSectionParentComp } from "./LandingPageUppersec/MidSection/MidSectionParent";
import { LandingNavBar } from "./LandingPageUppersec/UpperSection/Navbar/LandingPageNavBar";
import { UpperSectionParent } from "./LandingPageUppersec/UpperSection/UpperSectionSearchFeature/UpperSectionParent";

export function LandingPageParent(){
    
    return(
        <>
         <LandingNavBar/>
         <UpperSectionParent/>
         <MidSectionParentComp/>
         <Footerbody/>
        </>
    )

}