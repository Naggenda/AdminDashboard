/*jshint esversion: 6 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from "./views/Profile/profile";
import Navbar from "./Layout/Sidebar";
import Sidebar from "./Layout/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
    <Router>
      <div className="navbar-fixed">
        <Sidebar />
        <Navbar />
      </div>
      <Routes>
          <Route path='/profile' element={ <Profile />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
