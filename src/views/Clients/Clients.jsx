import { useState } from "react";
import "./partials/clients.css";
// import { users } from "./partials/users";
import UserTable from "./partials/Table";
import { Link } from "react-router-dom";

const Clients = () => {
  const [query, setQuery] = useState("");

  const search = data => {
    return data.filter(
      item =>
        item.fullname.toLowerCase().includes(query) ||
        item.bookNo.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.amount.toLowerCase().includes(query)
    );
  };

  return (
    <div className="main-content">
      <div className="top-sect">
        <h2 className="title-bg">User Accounts</h2>
        <Link to='/newUser'><button className="btn btn-primary">New User</button></Link>
      </div>
      <div className="search">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          name="search"
          id="search"
          className="form-control"
          placeholder="search..."
          onChange={e => setQuery(e.target.value)}
        />
        <UserTable data={search} />
      </div>
    </div>
  );
};

export default Clients;
