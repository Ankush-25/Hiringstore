import { MidSectionParentComp } from "./LandingPageUppersec/MidSection/MidSectionParent";
import { UpperSectionParent } from "./LandingPageUppersec/UpperSection/UpperSectionSearchFeature/UpperSectionParent";

export function LandingPageParent(){
    
    return(
        <>
         <UpperSectionParent/>
         <MidSectionParentComp/>
        </>
    )

}