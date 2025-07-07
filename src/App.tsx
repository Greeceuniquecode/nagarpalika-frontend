import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import TestPage from "./user/UserDetailsPage";
import Layouts from "./layouts/Layouts";
import UserIdForm from "./user/UserIdForm";
import UserDetailsPage from "./user/UserDetailsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />} >
        <Route index element={<LandingPage />} />
          <Route path="/nagarikta" element={<UserIdForm />} />
          <Route path="/test" element={<UserDetailsPage />} />
          {/* Dummy routes for other navbar links */}
          <Route path="/home" element={<div className="p-10">परिचय पृष्ठ</div>} />
          <Route path="/about-us" element={<div className="p-10">हाम्रो बारेमा</div>} />
          <Route path="/contact-us" element={<div className="p-10">सम्पर्क पृष्ठ</div>} />
          <Route path="/login" element={<div className="p-10">Login Page</div>} />
          <Route path="/signup" element={<div className="p-10">Signup Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
