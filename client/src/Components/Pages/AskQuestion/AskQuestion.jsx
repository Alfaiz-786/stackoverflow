import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./AskQuestion.css";
import { askQuestion } from "../../../actions/question.js";
import ThemeSwitcher from "../../ThemeSwitcher.js";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log({ questionTitle, questionBody,questionTags})
    dispatch(
      askQuestion(
        {
          questionTitle,
          questionBody,
          questionTags,
          userPosted: User.result.name,
          userId: User.result._id,
        },
        navigate
      )
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };

  return (
    <ThemeSwitcher>
      <div className="ask-question">
        <div className="ask-ques-container">
          <h1>Ask a public Question</h1>
          <form onSubmit={handelSubmit}>
            <div className="ask-form-container">
              <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>
                  Be specific and imagine you're asking a question to another
                  person
                </p>
                <input
                  type="text"
                  id="ask-ques-title"
                  onChange={(e) => {
                    setQuestionTitle(e.target.value);
                  }}
                  placeholder="e.g. ls there an R function for finding the index of an element in a vector?"
                />
              </label>
              <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>
                  Include all information someone would need to answer your
                  question
                </p>
                <textarea
                  name="text"
                  id="ask-ques-title"
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    setQuestionBody(e.target.value);
                  }}
                  onKeyPress={handleEnter}
                ></textarea>
              </label>
              <label htmlFor="ask-ques-tags">
                <h4>Tags </h4>
                <p>Add upto 5 tags to describe, what your answer is about</p>
                <input
                  type="text"
                  id="ask-ques-title"
                  onChange={(e) => {
                    setQuestionTags(e.target.value.split(" "));
                  }}
                  placeholder="e.g. (html typescript wordpress"
                />
              </label>
            </div>
            <input
              type="submit"
              value="Review your question"
              className="Review-btn"
            />
          </form>
        </div>
      </div>
    </ThemeSwitcher>
  );
};

export default AskQuestion;
