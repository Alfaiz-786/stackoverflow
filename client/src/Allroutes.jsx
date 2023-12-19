import React from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./Components/Pages/Auth/Auth";
import Home from "./Components/Pages/Home/Home";
import Questions from "./Components/Pages/Question/Questions";
import AskQuestion from "./Components/Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Components/Pages/Question/DisplayQuestion";
import Tags from "./Components/Pages/Tags/Tags";
import Users from "./Components/Pages/Users/Users";
import UserProfile from "./Components/Pages/UserProfile/UserProfile";
import ThemeSwitcher from "./Components/ThemeSwitcher";

const Allroutes = () => {
  return (
    <Routes>
      <Route
        path="/Auth"
        element={
          <ThemeSwitcher>
            <Auth />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/"
        element={
          <ThemeSwitcher>
            <Home />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/Questions"
        element={
          <ThemeSwitcher>
            <Questions />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/AskQuestion"
        element={
          <ThemeSwitcher>
            <AskQuestion />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/Questions/:id"
        element={
          <ThemeSwitcher>
            <DisplayQuestion />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/Tags"
        element={
          <ThemeSwitcher>
            <Tags />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/Users"
        element={
          <ThemeSwitcher>
            <Users />
          </ThemeSwitcher>
        }
      />
      <Route
        path="/Users/:id"
        element={
          <ThemeSwitcher>
            <UserProfile />
          </ThemeSwitcher>
        }
      />
    </Routes>
  );
};

export default Allroutes;
