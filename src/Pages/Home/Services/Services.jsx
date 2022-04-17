import React from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "../Service_Card/ServiceCard";

const Services = () => {
  const [services, setServices] = useServices();
  console.log(services);

  return (
    <div className='md:w-4/5 my-5 md:mx-auto' >
      <h2 className="text-2xl font-bold mb-5 text-center ">My Services</h2>
      <div data-aos="fade-up" className=" mx-2 md:mx-0 grid md:grid-cols-3 ">
        {services.map((service) => (
          <ServiceCard service={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
