import React from "react";
import { TiTick } from "react-icons/ti";
const ServiceLists = ({ title }) => {
  return (
    <div>
      <li>
        <TiTick />
        <p>{title}</p>
      </li>
    </div>
  );
};

export default ServiceLists;
