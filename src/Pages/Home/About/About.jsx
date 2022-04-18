import React from "react";
import akashPk from "../../../images/akash-pk.jpg";
const About = () => {
  return (
    <div className="my-10">
      <div className="max-w-sm p-5 md:mx-auto hover:scale-105 cursor-pointer duration-200  mx-2 bg-white rounded-lg border border-gray-200 shadow-2xl   ">
        <img className=" w-96 h-96 rounded-full" src={akashPk} alt="" />

        <div className="p-5 text-center ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Akash PK
          </h5>

          <p className="mb-3 font-normal  leading-8 text-gray-700 ">
            Although height is 5 feet 8 inches, But my dream is sky-high🔥{" "}
            <br />
            Already i started working on my dream . <br />
            Really my dream is so big. I want to make my own company like Google
            or Amazon . Its funny but i believe on myself, <br />{" "}
            <span className=" italic  ">
              I can and I will make it Inshallah
            </span>{" "}
            💥
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
