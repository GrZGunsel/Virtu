import React from "react";
import "./Feedback.scss";
import Slider from "react-slick";
import ClientFeeback from "./ClientFeeback";

var settings = {
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToScroll: 1,
};
function Feedback() {
  return (
    <div className="feeback">
      <div className="container">
        <div className="feeback-body">
          <div className="left-container">
            <h3>Testimonial</h3>
            <h1>What our client say</h1>
            <div className="slider">
              <Slider {...settings}>
                <ClientFeeback
                  description="Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem "
                  author="Kshitiz Moktan"
                  title="designation"
                />
                <ClientFeeback
                  description="Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem "
                  author="Kshitiz Moktan"
                  title="designation"
                />
                <ClientFeeback
                  description="Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem "
                  author="Kshitiz Moktan"
                  title="designation"
                />
                <ClientFeeback
                  description="Nullam congue pretium nisl. Curabitur at sem et leo dictum pretium. Morbi in rutrum tellus. Donec interdum ut felis et rutrum. Proin vitae venenatis sem "
                  author="Kshitiz Moktan"
                  title="designation"
                />
              </Slider>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="right-container">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=878&q=80 "
              alt=""
              height="auto"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
