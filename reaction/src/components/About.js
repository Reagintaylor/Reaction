import React from 'react';
import resume from '../images/resume.pdf'

export default function About() {
  return (
    <div>
      <img src="" alt="" className=""/>
      <p>
        My name is Reagin Turner and I'm from Atlanta, GA. I'm a full stack developer with a passion for turining ideas into results. I've completed Georgia Tech's Full Stack coding bootcamp and I'm excited to officially enter the tech field. One of my favorite skills are my creative and innovative thinking. Please take a look around my portfolio that I built with React.js!

        Skills: 

         <Link to={resume} target="_blank" download className="nav three">Resume</Link>
      </p>
    </div>
  );
}
