import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import LandingPage from "./landingPage/LandingPage";
import Layouts from "./layouts/Layouts";
import UserIdForm from "./user/UserIdForm";
import LoginPage from "./auth/LoginPage";
import AboutUsPage from "./dashboard/aboutUsPage";
import PageNotFound from "./global/PageNotFound";
import UserDetailsPage from "./user/UserDetailsPage";
import Users from "./user/Users";
import MalpotIdForm from "./user/MalpotIdForm";
import MalpotForm from "./user/MalpotPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "nagarikta", element: <UserIdForm /> },
      { path: "user-details", element: <UserDetailsPage /> },
      { path: "users", element: <Users /> },
      { path: "sifarisform", element: <MalpotIdForm /> },
      { path: "sifaris", element: <MalpotForm/> },
      { path: "home", element: <LandingPage /> },
      { path: "about-us", element: <AboutUsPage /> },
      { path: "contact-us", element: <div className="p-10">सम्पर्क पृष्ठ</div> },
      { path: "login", element: <LoginPage /> },
      { path: "landing-page", element: <LandingPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
