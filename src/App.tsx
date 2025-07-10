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

