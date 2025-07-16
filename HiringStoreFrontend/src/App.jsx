import { LandingPageParent } from "./landingpage/LandingPageParent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingNavBar } from "./landingpage/LandingPageUppersec/UpperSection/Navbar/LandingPageNavBar";
import { Footerbody } from "./landingpage/LandingPageLowersec/FooterSec";
import SignUp from "./signUp/SignUP";
import Blogs from "./Blogs/Blogs";
import Error404 from "./Error404";
import AboutUs from "./aboutPage/AboutUs";
import Login from "./login/Login";
import AppDashboard from "./App/AppDashboard";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />}/>
        <Route
          path="*"
          element={
            <>
              <LandingNavBar />
              <Routes>
                <Route path="/" element={<LandingPageParent />}/>
                <Route path="/Blogs" element={<Blogs />}/>
                <Route path="/aboutUs" element={<AboutUs />}/>
                <Route path="/*" element={<Error404 />}/>
                <Route path="/app" element={<AppDashboard />}/>
                {/* <Route path="/app/JobPost" element={<AppDashboard />}/> */}
                {/*<Route path="/Career" element={<LandingPageParent />} />
              // <Route path="/privacy-policy" element={<LandingPage/>} />
              // <Route path="/contact-Us" element={<LandingPageParent />} />
              // <Route path="/Browse_Jobs" element={<LandingPageParent />} />
              // <Route path="/" element={<LandingPageParent />} /> */}
              </Routes>
              <Footerbody />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
