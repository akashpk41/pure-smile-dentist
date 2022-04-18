import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4  text-base md:text-sm  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
      <span className=" text-gray-500 sm:text-center ">
        © 2022{" "}
        <Link to="/" className="hover:underline">
        Pure Smile
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex text-base md:text-sm flex-wrap items-center mt-3  text-gray-500  sm:mt-0">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/blog" className="mr-4 hover:underline md:mr-6">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/licensing" className="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
