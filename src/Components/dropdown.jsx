import React from 'react';
import { NavLink } from "react-router-dom";
import Logout from '../Components/logout';


const Test = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    <Logout />
    setOpen(false);
  };

  return (
    <Dropdown
      open={open}
      trigger={<button onClick={handleOpen}>prof</button>}
      menu={[
        <NavLink to="/profile" onClick={handleMenuOne}>Profile</NavLink>,
        <input type="button" onClick={handleMenuTwo} className="btn btn-danger" value="Logout"/>,
      ]}
    />
  );
};

const Dropdown = ({ open, trigger, menu }) => {
  return (
    <div className="dropdown">
      {trigger}
      {open ? (
        <ul className="menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="menu-item">{menuItem}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
export default Test;