import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import Layouts from "./layouts/Layouts";
import UserIdForm from "./user/UserIdForm";
import LoginPage from "./auth/LoginPage";
import { useState, useEffect } from "react";
import AboutUsPage from "./dashboard/aboutUsPage";
import PageNotFound from "./global/PageNotFound";
import UserDetailsPage from "./user/UserDetailsPage";
import Users from "./user/Users";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    if (userEmail != null) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />} >
          <Route path='*' element={<PageNotFound />} />
          <Route index element={<LandingPage />} />

          <Route path="/nagarikta" element={<UserIdForm />} />
          <Route path="/user-details" element={<UserDetailsPage />} />
          {/* {isLoggedIn && (
            <> */}
              <Route path="/users" element={<Users />} />
            {/* </>
          )} */}
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

