import { Link } from "react-router-dom";
import Logo from '../../assets/logo/logo.png'


const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-12 border-b-4 border-blue-800 rounded-lg text-lg font-semibold bg-gray-100">
      <div>
        <Link className="text-2xl tracking-widest font-mono flex gap-4" to="/">
          <img src={Logo} className="h-12 w-12 rounded-full" alt="Nepal Government Logo" />
          <p className="my-auto"> इटहरी उपमहानगरपालिका कार्यालय</p>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
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
    </nav>
  );
};

export default Navbar;
