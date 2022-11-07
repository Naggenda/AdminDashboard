// import { NavLink } from "react-router-dom";
import React from "react";
import Dropdown from "../Components/dropdown";
// import { AiOutlineSearch } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <form action="#" method="POST">
          <label htmlFor="search"></label>
          <input type="text" placeholder="Search" />
          <button>ser</button>
        </form>
      </div>
      <div className="profile">
        <Dropdown />
      </div>
    </div>
  );
};

export default Sidebar;
