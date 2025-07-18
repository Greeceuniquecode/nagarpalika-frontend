import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    const userEmail = await localStorage.getItem("email");
    setIsLoggedIn(!!userEmail && userEmail !== "null" && userEmail !== "false");
  }

  useEffect(() => {
    fetchUser()
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    toast.success("logged Out Succesfully");
    setIsLoggedIn(false);
    navigate("/landing-page"); // or "/" if you prefer
  };

  return (
    <>
    <ToastContainer />
    <nav className="bg-gray-100 border-b-4 border-blue-800 rounded-lg text-lg font-semibold px-6 py-4 print:hidden">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <Link
          className="text-2xl tracking-widest font-mono flex gap-4 items-center"
          to="/"
        >
          <p className="hidden sm:block">SajiloNepal</p>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4 items-center">
          <Link className="hover:text-blue-600 duration-300" to="/">
            <button>परिचय</button>
          </Link>
          <Link className="hover:text-blue-600 duration-300" to="/about-us">
            हाम्रो बारेमा
          </Link>
          <Link className="hover:text-blue-600 duration-300" to="/contact-us">
            संपर्क
          </Link>

          {isLoggedIn && (
            <Link
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-blue-700 duration-300"
              to="/nagarikta"
            >
              नागरिकता
            </Link>
          )}
               {isLoggedIn && (
            <Link
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-blue-700 duration-300"
              to="/sifarisform"
            >
              घर बाटो सिफारिस 
            </Link>
          )}

          {isLoggedIn ? (
            <button
              className="bg-red-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-red-800 duration-300"
              onClick={handleLogout}

            >
              Logout
            </button>
          ) : (
            <Link
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-blue-800 duration-300"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <Link
            className="hover:text-blue-600 duration-300"
            to="/home"
            onClick={() => setIsOpen(false)}
          >
            परिचय
          </Link>
          <Link
            className="hover:text-blue-600 duration-300"
            to="/about-us"
            onClick={() => setIsOpen(false)}
          >
            हाम्रो बारेमा
          </Link>
          <Link
            className="hover:text-blue-600 duration-300"
            to="/contact-us"
            onClick={() => setIsOpen(false)}
          >
            संपर्क
          </Link>

          {isLoggedIn && (
            <Link
              className="bg-red-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
              to="/nagarikta"
              onClick={() => setIsOpen(false)}
            >
              नागरिकता
            </Link>
          )}

          {isLoggedIn ? (
            <button
              className="bg-gray-800 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-gray-900 duration-300"
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:scale-105 hover:bg-blue-800 duration-300"
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
    </>
  );
};
export default Navbar;
