import React, { useEffect, useState } from "react";

const Table = () => {

  const [data, setUsers] = useState([]);
  // let inputobj = { bookNo, fullname, email, amount };

  const fetchUserData = () => {
    fetch('http://localhost:8000/userdata').then(res => {
      return res.json()
    })
      .then(resp => {
        setUsers(resp)
      })
  };
  useEffect(() => {
    fetchUserData()
  }, []);

  const handleDelete = ((id) => {
    // e.preventDefault();
    if(window.confirm('do you want to delete User!')){
    fetch('http://localhost:8000/userdata/'+id, { method: 'DELETE' })
    .then(()=>{
      window.location.reload();
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  })

  //Edit
  const handleEdit = ((id)=>{
    fetch('http://localhost:8000/userdata/'+id, { method: 'PUT' })
    .then(()=>{
      window.location.reload();
    }).catch((err)=>{
      console.log(err.message);
    })
  })

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
                <button className="btn btn-primary" onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button className="btn btn-danger" onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
