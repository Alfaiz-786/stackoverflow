import React from "react";

import "./Users.css";
import LeftSidebar from "../../Leftsidebar/Leftsidebar";
import UsersList from "./UsersList";
import { useLocation } from "react-router-dom";

const Users = () => {
  const location = useLocation();

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-user-2">
        {location.pathname === "/Users" ? <UsersList /> : <></>}
      </div>
    </div>
  );
};

export default Users;
