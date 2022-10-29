import React from "react";

const form = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="fullname" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="tel" name="contact" />
        </div>
      </form>
    </div>
  );
};

export default form;
