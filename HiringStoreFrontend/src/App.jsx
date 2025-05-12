import { LandingPageParent } from "./landingpage/LandingPageParent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/signUp" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
        <Route path="/" element={<LandingPageParent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
