import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import ThemeSwitcher from "../../ThemeSwitcher.js";

const User = ({ user }) => {
  return (
    <ThemeSwitcher>
      <Link to={`/Users/${user._id}`} className="user-profile-link">
        {user.file ? (
          <img
            src={`http://localhost:5000/uploads/${user.file}`}
            alt={user.name}
            className="profile-picture"
            style={{ borderRadius: "50%", width: "35px", height: "35px" }}
          />
        ) : (
          <Avatar
            backgroundColor="#009dff"
            color="white"
            borderRadius="50%"
            px="5px"
            py="10px"
          >
            {user.name.charAt(0).toUpperCase()}
          </Avatar>
        )}
        <h5>{user.name}</h5>
      </Link>
    </ThemeSwitcher>
  );
};

export default User;
