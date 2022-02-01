import React from 'react';
import resume from '../images/resume.pdf'
import { Link } from "react-router-dom";
import pic from '../images/picofme.png'

export default function About() {
  return (
    <div className="container">
      <aside><img src={pic} alt="" className="picture" width="350px"/></aside>
      <p className="bio">
        My name is Reagin Turner and I'm from Atlanta, GA. I'm a full stack developer with a passion for turining ideas into results. I've completed Georgia Tech's Full Stack coding bootcamp and I'm excited to officially enter the tech field. One of my favorite skills are my creative and innovative thinking. Please take a look around my portfolio that I built with React.js!
<br></br>
        Proficiencies: Javascript, HTML, CSS, Node.js, Express.js, MongoDB, MySQL
<br></br>
         <Link to={resume} target="_blank" download className="resumelink">Resume</Link>
      </p>
    </div>
  );
}
