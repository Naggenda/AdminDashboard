import { useState } from "react";
import "./partials/clients.css";
import { users } from "./partials/users";
import UserTable from "./partials/Table";

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
        <button className="btn btn-primary">New User</button>
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
        <UserTable data={search(users)} />
      </div>
    </div>
  );
};

export default Clients;
