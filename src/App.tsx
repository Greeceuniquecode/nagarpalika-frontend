import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Layouts from "./layouts/Layouts";
import UserIdForm from "./user/UserIdForm";
import UserDetailsPage from "./user/UserDetailsPage";
import LoginPage from "./auth/LoginPage";
import { useState, useEffect } from "react";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
  const user = localStorage.getItem("user");
  setIsLoggedIn(!!user && user !== "null" && user !== "false");
}, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />} >
          <Route index element={<LandingPage />} />
          <Route path="/nagarikta" element={<UserIdForm />} />
            {isLoggedIn && (
    <Link
      className="bg-red-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
      to="/nagarikta"
    >
      नागरिकता
    </Link>
  )}
          <Route path="/user-details" element={<UserDetailsPage />} />
          {/* Dummy routes for other navbar links */}
          <Route path="/home" element={<div className="p-10">परिचय पृष्ठ</div>} />
          <Route path="/about-us" element={<div className="p-10">हाम्रो बारेमा</div>} />
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

