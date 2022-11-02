import React from 'react';
import { NavLink } from "react-router-dom";

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
    setOpen(false);
  };

  return (
    <Dropdown
      open={open}
      trigger={<button onClick={handleOpen}>Dropdown</button>}
      menu={[
        <NavLink to="/profile" onClick={handleMenuOne}>Profile</NavLink>,
        <button onClick={handleMenuTwo}>LogOut</button>,
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