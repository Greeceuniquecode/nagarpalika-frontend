import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Layouts from "./layouts/Layouts";
import UserIdForm from "./user/UserIdForm";
import UserDetailsPage from "./user/UserDetailsPage";
import LoginPage from "./auth/LoginPage";
import { useState, useEffect } from "react";
import AboutUsPage from "./dashboard/aboutUsPage";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    setIsLoggedIn(!!userEmail && userEmail !== "null" && userEmail !== "false");
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />} >
          <Route index element={<LandingPage />} />
          <Route path="/nagarikta" element={isLoggedIn?(<UserIdForm />):(<LoginPage />)} />
          <Route path="/user-details" element={isLoggedIn?(<UserDetailsPage />):(<LoginPage />)} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<div className="p-10">सम्पर्क पृष्ठ</div>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/landing-page" element={<LandingPage />} >

          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

