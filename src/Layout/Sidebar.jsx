// import { NavLink } from "react-router-dom";
import React from "react";
import Dropdown from '../Components/dropdown';

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
           <Dropdown />
        </div>
    </div>
  );
};

export default Sidebar;
