import React from "react";
import "./vision.scss";
import Visionlist from "./Visionlist";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { DiDatabase } from "react-icons/di";
import { ImConnection } from "react-icons/im";
const VisionPage = () => {
  return (
    <div className="vision">
      <div className="container">
        <div className="vision-body">
          <div className="left-container">
            <img
              src="https://images.unsplash.com/photo-1565995487495-e2a23f3af2ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
              alt="laptop"
            />
          </div>
          <div className="right-container">
            <h3>Our vision</h3>
            <h1>We craft bright future</h1>
            <p>
              In et feugiat neque, vel porta ante. Morbi at justo justo. Etiam
              eget eros ac enim iaculis sagittis. Maecenas eget sapien purus.{" "}
            </p>
            <div className="vision-lists">
              <div className="visionlist">
                <MdMiscellaneousServices />
                <Visionlist
                  title="Managed it service"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div className="visionlist">
                <MdSecurity />
                <Visionlist
                  title="Cloud security"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div className="visionlist">
                <DiDatabase />
                <Visionlist
                  title="Cloud data"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
              <div className="visionlist">
                <ImConnection />
                <Visionlist
                  title="Connectivity"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionPage;
