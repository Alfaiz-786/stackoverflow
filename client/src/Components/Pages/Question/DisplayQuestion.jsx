import React from "react";
import Leftsidebar from "../../Leftsidebar/Leftsidebar";
import Rightsidebar from "../../Rightsidebar/Rightsidebar";
import QuestionDetails from "./QuestionDetails";
import "./Questions.css";

const DisplayQuestion = () => {
  return (
    <>
      <div className="home-container-1">
        <Leftsidebar />
        <div
          className="main-container"
          // style={{ display: "flex", width: "100%" }}
        >
          <div className="home-container-2" style={{ border: "none" }}>
            <QuestionDetails />
          </div>
          <div className="home-container-3">
            <Rightsidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayQuestion;
