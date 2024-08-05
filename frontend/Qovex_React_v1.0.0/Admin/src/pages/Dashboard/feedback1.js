// Feedback.js
import React, { useState } from 'react';
import axios from 'axios';
import './lm.css'; // Import your CSS file

function Feedback1() { // Change function name to start with uppercase letter
  const [formdata, setFormdata] = useState({
    'name': '',
    'email': '',
    'comments': ''
  });

  const handle = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios.post('http://localhost:5000/addForm', { formdata }).then((res) => console.log(res.data));
    alert("inserted");
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="comment-box">
       <center> <h1 >Feedback</h1></center>
          <form onSubmit={handle}>
            <label>Name :</label><br />
            <input type="" name="name" placeholder="Name" id='in' className='inp' onChange={(e) => setFormdata({ ...formdata, name: e.target.value })} /><br />
            <label>Email :</label><br />
            <input type="email" placeholder="Email" name='email' id='in' className='inp' onChange={(e) => setFormdata({ ...formdata, email: e.target.value })} /><br />
            <label>Comments :</label><br />
            <textarea placeholder="Your message" name='comments' className='text-area' onChange={(e) => setFormdata({ ...formdata, comments: e.target.value })}></textarea><br /><br />
            <button type="submit" id='submit' className='sub'>Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Feedback1;
