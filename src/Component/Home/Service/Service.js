import React from "react";
import "./Service.scss";
import ServiceCard from "./ServiceCard";
import ServiceLists from "./ServiceLists";
const Service = () => {
  return (
    <div className="container">
      <div className="Service">
        <div className="service-body">
          <div className="left-container">
            <h3>Why Choose us</h3>
            <h1>What we do ?</h1>
            <p>
              Nulla ac eros vel neque mattis maximus. In et feugiat neque, vel
              porta ante. Morbi at justo justo. Etiam eget eros ac enim iaculis
              sagittis. Maecenas eget sapien purus. Phasellus gravida viverra
              convallis. Ut vitae mauris tincidunt, pharetra turpis condimentum,
              eleifend ipsum. Proin mollis bibendum odio, eu scelerisque lacus
              fermentum in.
            </p>
            <div className="service-tab">
              <ul>
                <ServiceLists title="Customer Funnel Booster" />
                <ServiceLists title="Vulputate massa" />
                <ServiceLists title="Remarketing Blueprint" />
                <ServiceLists title="Phasellus odio dolor" />
                <ServiceLists title="Lead Nurturing Scheme" />
                <ServiceLists title="Aliquam sed finibus" />
              </ul>
            </div>
          </div>
          <div className="right-container">
            <div className="services">
              <div className="serviceCards">
                <ServiceCard
                  title="Data Driven"
                  description="We bring the right people together to challenge established thinking and drive transform in 2020"
                  active="active"
                />
                <ServiceCard
                  title="Tech Support "
                  description="We bring the right people together to challenge established thinking and drive transform in 2020"
                />
              </div>
              <div className="serviceCards">
                <ServiceCard
                  title="Market Analys"
                  description="We bring the right people together to challenge established thinking and drive transform in 2020"
                />
                <ServiceCard
                  title="Data Secure "
                  description="We bring the right people together to challenge established thinking and drive transform in 2020"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
