import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div className="sidenav">
      <div className="logo-sect">
      <NavLink to="/home">Logo</NavLink>
      </div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/clients">Clients</NavLink>
      <NavLink to="/teams">Project Teams</NavLink>
      <NavLink to="/track">Time Tracking</NavLink>
      <NavLink to="/hardware">Hardware</NavLink>
      <NavLink to="/documents">Documents</NavLink>
    </div>
  );
};

export default Navbar;
