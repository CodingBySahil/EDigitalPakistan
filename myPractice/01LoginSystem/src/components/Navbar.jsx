import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link
            to="/signin"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            to="/otp"
            className="text-white hover:text-yellow-400 transition-colors duration-300"
          >
            OTP
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
