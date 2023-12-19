import React from "react";
import Leftsidebar from "../../Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Rightsidebar/Rightsidebar";
import Homemainbar from "../../Homemainbar/Homemainbar";
import VideoPlayer from "../../VideoPlayer.js";
import "../../../App.css";

const Home = () => {
  return (
    <>
      <div className="home-container-1">
        <Leftsidebar />
        <div
          className="main-container"
          // style={{ display: "flex", width: "100%" }}
        >
          <div className="home-container-2" style={{ border: "none" }}>
            <Homemainbar />
          </div>
          <div className="home-container-3">
            <Rightsidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
