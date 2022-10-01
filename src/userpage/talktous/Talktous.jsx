import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './talktous.css';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); //0 pag integer/number
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState('');

  const addToList = () => {
    Axios.post("http://localhost:3001/insertTalk", {
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  };

  return (
    <div className="body_talktous">

    <div class="container">
    <div class="contact-box">
        <div class="left"></div>
        <div class="right">
            <h2>Contact Us</h2>
            <input type="text" class="field" placeholder="Your Name"
            onChange={(event) => {
              setName(event.target.value);
            }}/>
            <input type="text" class="field" placeholder="Your Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}/>
            <input type="text" class="field" placeholder="Phone"
            onChange={(event) => {
              setPhone(event.target.value);
            }}/>
            <textarea placeholder="Message" class="field"
            onChange={(event) => {
              setMessage(event.target.value);
            }}></textarea>
            <button class="btn" onClick={addToList}>Send</button>
        </div>
    </div>
    
</div>


</div>

  )
  
}

export default App;