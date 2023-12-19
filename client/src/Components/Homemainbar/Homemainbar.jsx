import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Homemainbar.css";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import ThemeSwitcher from "../ThemeSwitcher.js";
import VideoPlayer from "../VideoPlayer.js";

const Homemainbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = 1;

  const questionsList = useSelector((state) => state.questionReducer);

  //   _id: 1,
  //   upVotes : 3,
  //   dowmVotes : 2,
  //   noOfAnswer: 2,
  //   questionTitle : "what is a function?",
  //   questionBody :"It is meant to be",
  //   questionTags : ["java", "nodejs", "reactjs", "mongodb"],
  //   userPosted : "mano",
  //   userId : 1,
  //   askedOn : "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswered : "Hisham",
  //     answeredOn : "jan 2",
  //     userId : 2
  //   }]

  // },
  //  {
  //   _id: 2,
  //   upVotes : 3,
  //   dowmVotes : 2,
  //   noOfAnswer: 0,
  //   questionTitle : "What is the function?",
  //   questionBody : "It is meant to be",
  //   questionTags : ["javascript" , "R" , "python"],
  //   userPosted : "mano",
  //   userId : 2,
  //   askedOn : "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswered : "Hisham",
  //     answeredOn : "jan 2",
  //     userId : 2
  //   }]
  //  },
  //  {
  //   _id: 3,
  //   upVotes : 3,
  //   dowmVotes : 2,
  //   noOfAnswer:0,
  //   questionTitle : "what is a fuction?",
  //   questionBody : "It is meant to be",
  //   questionTags : ["javascript" , "R" , "python"],
  //   userPosted : "mano",
  //   userId : 3,
  //   askedOn :  "jan 1",
  //   answer: [{
  //     answerBody : "Answer",
  //     userAnswered : "Hisham",
  //     answeredOn : "jan 2",
  //     userId : 2
  //   }]
  //  }]

  const checkAuth = () => {
    if (user === null) {
      alert(" Log in or Sign up to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <ThemeSwitcher>
      <div className="main-bar">
        <div className="main-bar-header">
          {location.pathname === "/" ? (
            <h1>Top Question</h1>
          ) : (
            <h1>All Question</h1>
          )}
          <button onClick={checkAuth} className="ask-btn">
            {" "}
            Ask Question
          </button>
        </div>
        <div>
          {questionsList.data === null ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <p>{questionsList.data.length} questions</p>
              <QuestionList questionsList={questionsList.data} />
            </>
          )}
        </div>
        <div>
          <VideoPlayer />
        </div>
      </div>
    </ThemeSwitcher>
  );
};

export default Homemainbar;
