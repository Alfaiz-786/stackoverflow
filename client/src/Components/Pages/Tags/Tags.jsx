import React from "react";

import LeftSidebar from "../../Leftsidebar/Leftsidebar";
import TagsList from "./TagsList";
import "./Tags.css";
import { tagsList } from "./tagList";
import ThemeSwitcher from "../../ThemeSwitcher";

const Tags = ({ slideIn, handleSlideIn }) => {
  return (
    <ThemeSwitcher>
      <div className="home-container-tags-1">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        <div className="home-container-tags-2">
          <h1 className="tags-h1">Tags</h1>
          <p className="tags-p">
            A tag is a keyword or label that categorizes your question with
            other, similar questions.
          </p>
          <p className="tags-p">
            Using the right tags makes it easier for others to find and answer
            your question.
          </p>
          <div className="tags-list-container">
            {tagsList.map((tag, index) => (
              <TagsList tag={tag} key={index} />
            ))}
          </div>
        </div>
      </div>
    </ThemeSwitcher>
  );
};

export default Tags;
