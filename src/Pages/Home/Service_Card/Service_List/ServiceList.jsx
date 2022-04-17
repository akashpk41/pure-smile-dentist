import React, { useState } from "react";
import useFakeData from "../../../../hooks/useFakeData";

const ServiceList = ({ services }) => {
  const { service1, service2, service3, service4 } = services;

  return (
    <ul className="mb-3 font-normal text-gray-700 ">
      <li className='flex items-center justify-center' >
        {" "}
        <img
          className=" w-5 md:w-3 mr-2"
          src="https://cdn-icons-png.flaticon.com/512/1271/1271380.png"
          alt=""
        />{" "}
        <span> {service1}</span>
      </li>
      <li className='flex items-center justify-center'>
        {" "}
        <img
           className=" w-5 md:w-3 mr-2"
          src="https://cdn-icons-png.flaticon.com/512/1271/1271380.png"
          alt=""
        />{" "}
        <span> {service2}</span>
      </li>
      <li className='flex items-center justify-center'>
        {" "}
        <img
           className=" w-5 md:w-3 mr-2"
          src="https://cdn-icons-png.flaticon.com/512/1271/1271380.png"
          alt=""
        />{" "}
        <span> {service3}</span>
      </li>
      <li className='flex items-center justify-center'>
        {" "}
        <img
           className=" w-5 md:w-3 mr-2"
          src="https://cdn-icons-png.flaticon.com/512/1271/1271380.png"
          alt=""
        />{" "}
        <span> {service4}</span>{" "}
        <span className=" font-semibold ml-3 text-green-500">Free</span>{" "}
      </li>
    </ul>
  );
};

export default ServiceList;
