import React from "react";

const ShowFeedback = ({ feedback }) => {
  const { name, description, img } = feedback;
  return (
    <div className="max-w-sm text-center  p-3 mx-2 mt-5 md:mt-0 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-2xl hover:scale-105 duration-300 ease-in-out">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 w-24 h-24 rounded-full shadow-lg"
          src={img}
          alt={name}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-700 ">{description} </span>
      </div>
    </div>
  );
};

export default ShowFeedback;
