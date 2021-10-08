import React from "react";
import Slider from "react-slick";
import Image from "./Image";
import "./client.scss";
var settings = {
  infinite: true,
  speed: 200,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
};
const Client = () => {
  return (
    <div className="client">
      <div className="container">
        <div className="client-body">
          <div className="left-container">
            <h3>Our Client</h3>
            <h1>We Work With 30 client</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="right-container">
            <div className="slider">
              <Slider {...settings}>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
              </Slider>
            </div>
            <p>
              Pellentesque ullamcorper ipsum eget ultricies ornare. Morbi
              lacinia sed diam vel varius. Phasellus non erat in elit mattis
              ultrices. Aenean nulla libero, vulputate vitae sem quis, dictum
              aliquam eros. Sed congue metus ac felis scelerisque.
            </p>
            <button className="btn"> Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
