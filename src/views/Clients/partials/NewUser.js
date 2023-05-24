import React, { useState } from 'react'
import { toast } from "react-toastify";

export default function NewUser() {
    const [bookNo, setBookNo] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let inputobj = { bookNo, fullname, email, amount }
        alert('sucess');
        fetch('http://localhost:8000/userdata',
            {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {

            }).catch((err) => {
                toast.error('failed to add user information');
            })
    }
    return (
        <div className="main-content">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bookNo">bookNo</label>
                    <input type="number" value={bookNo} onChange={(e) => setBookNo(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">fullname</label>
                    <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control" />
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
