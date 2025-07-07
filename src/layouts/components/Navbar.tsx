import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and Close icons
import Logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 border-b-4 border-blue-800 rounded-lg text-lg font-semibold px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <Link
          className="text-2xl tracking-widest font-mono flex gap-4 items-center"
          to="/"
        >
          <img src={Logo} className="h-12 w-12 rounded-full" alt="Logo" />
          <p className="hidden sm:block">इटहरी उपमहानगरपालिका कार्यालय</p>
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
          <Link className="hover:text-blue-600 duration-300" to="/home">
            <button>परिचय</button>
          </Link>
          <Link className="hover:text-blue-600 duration-300" to="/about-us">
            हाम्रो बारेमा
          </Link>
          <Link className="hover:text-blue-600 duration-300" to="/contact-us">
            संपर्क
          </Link>
          <Link
            className="bg-red-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
            to="/nagarikta"
          >
            नागरिकता
          </Link>
          <Link
            className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-blue-800 duration-300"
            to="/login"
          >
            Login
          </Link>
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
          <Link
            className="bg-red-600 text-white px-4 py-1 rounded-lg hover:scale-105 hover:bg-red-700 duration-300"
            to="/nagarikta"
            onClick={() => setIsOpen(false)}
          >
            नागरिकता
          </Link>
          <Link
            className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:scale-105 hover:bg-blue-800 duration-300"
            to="/login"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
