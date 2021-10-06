import React from "react";

const ServiceCard = ({ title, description, active }) => {
  return (
    <div className={`ServiceCard ${active}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
