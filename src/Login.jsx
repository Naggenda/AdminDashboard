import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import RoutesBrowse from "./RoutesBrowser";
import { toast } from "react-toastify";
import "./styles.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputobj = { username, password };
    fetch('http://localhost:8000/adminuser', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(inputobj)
    }).then((res) => {
      return res.json();
    }).then((resp) => {
      console.log(resp.username);
      if (username !== resp.username ) {
        toast.error('enter valid username');
      }
      if (Object.keys(resp).length === 0) {
        toast.error('Please Enter valid username');
      } else {
        if (resp.password === password) {
          toast.success('sucess');
          sessionStorage.setItem('username',username);
          setIsSubmitted(true);
        } else {
          toast.error('Please Enter valid credentials');
        }
      }

    }).catch((err) => {
      toast.error('Wrong user credentials');
    })
  }

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  // Generate JSX code for error message
  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="App1">
      <div className="form login-form">
        <div className="title">Sign In</div>

        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" value={username} onChange={(e) => setUsername(e.target.value)} required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="">
      <div className="success">
        {isSubmitted ? (
          <div>
            <RoutesBrowse />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
