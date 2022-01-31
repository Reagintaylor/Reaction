import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import validator from "validator"


export default function Contact() {
  return (
    <div>
      <h3>Contact me!</h3>
      {/* <p>
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
      </p> */}

      <form id="contact-form" onSubmit={event.preventDefault} method="POST">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" onSubmit={validateEmail} className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );


}

// check to see if the email is valid

const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Enter valid Email!')
    }
  }

// formSubmit(){


// }
// onNameChange(event) {
//   this.setState({name: event.target.value})
// }

// onEmailChange(event) {
//   this.setState({email: event.target.value})
// }

// onMessageChange(event) {
//   this.setState({message: event.target.value})
// }

// handleSubmit( event ) {
//   event.preventDefault();
//   console.log(this.state);
// }