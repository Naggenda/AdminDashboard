import React from "react";

const changepassword = () => {
  return (
    <div>
      <form action="#" method="POST">
        <div className="form-group">
          <label htmlFor="oldpassword">Old Password</label>
          <input type="password" name="oldpassword" required/>
        </div>
        <div className="form-group">
          <label htmlFor="newpassword">Email</label>
          <input type="password" name="newpassword" required/>
        </div>
        <div className="form-group">
          <label htmlFor="reenterpassword">Contact</label>
          <input type="password" name="reenterpassword" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default changepassword;
