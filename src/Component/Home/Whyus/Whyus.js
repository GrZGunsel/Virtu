import React from "react";
import "./Whyus.scss";
import image from "../../../image/Whyus.png";
import Whylist from "./Whylist";
const Whyus = () => {
  return (
    <div className="whyus">
      <div className="container">
        <div className="whyus-body">
          <div className="left-container">
            <img src={image} alt="" />
          </div>
          <div className="right-container">
            <h3>Industries we serve</h3>
            <h1>Why us ?</h1>
            <p>
              Morbi lacinia sed diam vel varius. Phasellus non erat in elit
              mattis ultrices. Aenean nulla libero, vulputate vitae sem quis,
              dictum aliquam eros. Sed congue metus ac felis scelerisque, ac
              finibus neque tincidunt.
            </p>
            <div className="list">
              <ul>
                <Whylist title="Duis tincidunt turpis et magna" />
                <Whylist title="Duis tincidunt turpis et magna" />
                <Whylist title="Duis tincidunt turpis et magna" />
                <Whylist title="Duis tincidunt turpis et magna" />
                <Whylist title="Duis tincidunt turpis et magna" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
