import React from "react";
import useFakeData from "../../../hooks/useFakeData";
import ShowFeedback from "./Show_Feedback/ShowFeedback";

const PatientFeedback = () => {
  const [feedbacks, setFeedbacks] = useFakeData("patientFeedback.json");

  return (
    <div id="services" className="md:w-4/5 my-10 md:mx-auto">
      <h2 className="text-2xl font-bold mb-5 text-center ">
        Patients Feedback
      </h2>
      <div data-aos="fade-up" className=" mx-2 md:mx-0 grid md:grid-cols-3 ">
        {feedbacks.map((feedback) => (
          <ShowFeedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
};

export default PatientFeedback;
