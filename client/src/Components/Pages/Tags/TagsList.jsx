import React from "react";
import "./Tags.css";

const TagsList = ({ tag }) => {
  return (
    <div className="tag">
      <h5 className="tag-name">{tag.tagName}</h5>
      <p className="tag-des">{tag.tagDesc}</p>
    </div>
  );
};

export default TagsList;
