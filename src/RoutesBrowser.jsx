/*jshint esversion: 6 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./views/Profile/profile";
import Teams from "./views/Teams";

import Navbar from "./Layout/Sidebar";
import Sidebar from "./Layout/Navbar";
import "./App.css";

function RoutesBrowser() {
  return (
    <Router>
      <div className="navbar-fixed">
        <Sidebar />
        <Navbar />
      </div>
      <Routes>
          <Route path='/profile' element={ <Profile />} />
          <Route path='/teams' element={ <Teams/> } />
        </Routes>
      </Router>
    
  );
}

export default RoutesBrowser;
