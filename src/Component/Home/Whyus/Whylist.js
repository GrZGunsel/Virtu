import React from "react";
import { TiTick } from "react-icons/ti";
const Whylist = ({ title }) => {
  return (
    <li>
      <TiTick />
      <p>{title}</p>
    </li>
  );
};

export default Whylist;
