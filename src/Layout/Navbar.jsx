import { NavLink } from "react-router-dom";
import React, {useState} from "react";
// import React from "react";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  
  return (
    <div className="classic">
      <div className={isNavExpanded ? "navbar-toggle expanded sidenav" : "navbar-toggle"}>
        <div className="logo-sect">
          <NavLink to="/">Logo</NavLink>
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/teams">Project Teams</NavLink>
        <NavLink to="/track">Time Tracking</NavLink>
        <NavLink to="/hardware">Hardware</NavLink>
        <NavLink to="/documents">Documents</NavLink>
      </div>
      <button
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        tog
      </button>
    </div>
  );
};

export default Navbar;
