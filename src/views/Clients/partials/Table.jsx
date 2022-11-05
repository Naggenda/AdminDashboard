import React from "react";

const Table = ({data}) => {
  return (
    <div className="table">
      <table>
        <tbody>
          <tr>
            <th>Book No.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Amount Saved</th>
            <th colSpan="3">Modify Buttons</th>
          </tr>
          {data.map((item) => (
          <tr key={item.id}>
          <td>{item.bookNo}</td>
          <td>{item.fullname}</td>
          <td>{item.email}</td>
          <td>{item.amount}</td>
          <td>
          <button className="btn btn-secondary">Deactivate</button>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
          </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
