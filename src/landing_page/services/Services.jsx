import React from "react";
import "./Services.css";
import Services_Data from "../../assets/Service_data/services_data";
import arrowRight from "../../assets/Social/arrowRight.svg";

function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services.</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>
                <img src={services.s_no} alt="" />
              </h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrowRight} alt="arrow icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
