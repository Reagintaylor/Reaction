import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  return (
    <div>
      <h3>Contact me!</h3>
      <p>
      <div class="mb-3">
       <label for="exampleFormControlInput1" class="form-label">Name: (First Last)</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="ex. John Doe" />
        <label for="exampleFormControlInput2" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Questions? Feedback?</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </p>
    </div>
  );
}
