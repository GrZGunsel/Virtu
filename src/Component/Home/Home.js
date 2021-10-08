import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <Navbar />
        <div className="maincontent">
          <div className="left-container">
            <h5>Customised tech service</h5>
            <h1>Innovative future of digital world</h1>
            <p>
              Nulla quis feugiat mi. Mauris tincidunt dui massa, non feugiat ex
              blandit vel. Nam lacinia dapibus nisi, ac convallis est tempor ac.{" "}
            </p>
            <div className="search">
              <input
                type="text"
                id="searchbar"
                placeholder="Your Email Address"
              />
              <button>Sign Up</button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
