import React from "react";

const Footer = () => {
  return (
    <footer className="p-4  text-base md:text-sm  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800">
      <span className=" text-gray-500 sm:text-center ">
        © 2022{" "}
        <a href="/" className="hover:underline">
          Smile Pure
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex text-base md:text-sm flex-wrap items-center mt-3  text-gray-500  sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
