import React from 'react';
import Twitter from '../images/twitter.png'
import Linked from '../images/linkedin.png'
import Github from '../images/github.png'

export default function Footer() {
  return (
    <div>
      <a href="https://github.com/Reagintaylor"><img className="github" alt="github-logo" src={Github}/></a>
      <a href="https://www.linkedin.com/in/reagin-turner-01068b16b/"><img className="linkedin" alt="linkedin-logo" src={Linked}/></a>
      <a href="/"><img className="twitter" alt="twitter-logo" src={Twitter}/></a>
    </div>
  );
}