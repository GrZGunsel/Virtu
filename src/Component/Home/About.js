import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="About">
      <div className="container">
        <div className="about-detail">
          <div className="left-container"></div>
          <div className="right-container">
            <h5>Welcome to Virtu company</h5>
            <h3>The best tech company</h3>
            <p>
              Phasellus odio dolor, tincidunt sed rutrum at, condimentum ac
              ipsum. Nullam congue pretium nisl. Curabitur at sem et leo dictum
              pretium. Morbi in rutrum tellus. Donec interdum ut felis et
              rutrum. Proin vitae venenatis sem. Aenean mattis malesuada dolor
              eget aliquam.
            </p>
            <div className="about-button">
              <button>icon</button>
              <button className="readmore">Readmore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
