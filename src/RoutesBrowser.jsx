/*jshint esversion: 6 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./views/Profile";
import Home from "./views/Home";
import Teams from "./views/Teams";
import Clients from "./views/Clients";
import Track from "./views/Tracking";
import Report from "./views/Reports";
import NewUser from "./views/Clients/partials/NewUser";

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
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/track" element={<Track />} />
        <Route path="/documents" element={<Report />} />
        <Route path="/newUser" element={<NewUser />} />
      </Routes>
    </Router>
  );
}

export default RoutesBrowser;
