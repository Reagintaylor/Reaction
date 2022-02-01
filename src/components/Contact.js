import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contact() {
  return (
    <div className="Contact">
      <h3>Contact me!</h3>
      <p>
      <div className="mb-3">
       <label for="exampleFormControlInput1" className="form-label">Name: (First Last)</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="ex. John Doe" />
        <label for="exampleFormControlInput2" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">Questions? Feedback?</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit"></button>
      </p>
      </div>
      );
}
