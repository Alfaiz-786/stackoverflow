import React from "react";
import Widget from "./Widget";
import WidgetTags from "./WidgetTags";
import "./Rightsidebar.css";
import ThemeSwitcher from "../ThemeSwitcher";

const Rightsidebar = () => {
  return (
    <ThemeSwitcher>
      <aside className="right-sidebar">
        <Widget />
        <WidgetTags />
      </aside>
    </ThemeSwitcher>
  );
};

export default Rightsidebar;
