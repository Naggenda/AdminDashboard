import { NavLink } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <div className="navbar">
        <div className="search">
          <form action="#" method="POST">
            <label htmlFor="search"></label>
            <input type="text" placeholder="Search" />
            <button>Sar</button>
          </form>
        </div>
        <div className="profile">
        <NavLink to="/profile">Pro</NavLink>
        </div>
    </div>
  );
};

export default Sidebar;
