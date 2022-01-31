import React from 'react';
import Projectprops from './Projectprops'
import planItImg from '../images/planit'
import notetakerImg from '../images/notetaker'
import reaginswebImg from '../images/reaginsweb'
import teamprofImg from '../images/teamprof'
import mealprepImg from '../images/mealprep'
import jateImg from '../images/jate'

const project = [
  {
    id: 0,
    title: "PlanIt",
    description:
    "A party planning app that helps you choose the decorations, music, activities and food for your party. ",
    repo: "https://github.com/Reagintaylor/PlanIt",
    deployed: "https://evening-earth-70019.herokuapp.com/",
    image: planItImg,
    skills: "JavaScirpt, Handlebars, CSS, Node.js, Authentication"
  },
  {
    id: 1,
    title: "Note Taker",
    description:
    "This app allows the user to take notes, delete them and save them. ",
    repo: "https://github.com/Reagintaylor/notetaker",
    deployed: "https://young-spire-94098.herokuapp.com/",
    image: notetakerImg,
    skills: "JavaScirpt, HTML, CSS, Local Storage"
  },
  {
    id: 3,
    title: "Reagins Web",
    description:
    "My first portfolio!",
    repo: "https://github.com/Reagintaylor/Reagins-Web",
    deployed: "https://reagintaylor.github.io/Reagins-Web/",
    image: reaginswebImg,
    skills: "HTML, CSS"
  },
  {
    id: 4,
    title: "Team Profile Generator",
    description:
    "This app allows a team manager to create a team in the command line. Then, it generates the members in an HTML file.",
    repo: "https://github.com/Reagintaylor/team-profile-generator",
    deployed: "#",
    image: teamprofImg,
    skills: "JavaScirpt, Node.js, HTML, Bootstrap"
  },
  {
    id: 5,
    title: "Meal Prep Life",
    description:
    "This app helps a user search for recipes that they can add to their calendar to cook later ",
    repo: "https://github.com/Reagintaylor/meal-prep-life",
    deployed: "https://sistaniabong.github.io/meal-prep-life/",
    image: mealprepImg,
    skills: "HTML, CSS, JavaScript, API, LocalStorage, JQuery"
  },
  {
    id: 6,
    title: "Text Editor",
    description:
    "This is a PWA that allows a user to download the app to be able to edit text anywhere!",
    repo: "https://github.com/Reagintaylor/text-editor",
    deployed: "https://ancient-dusk-30783.herokuapp.com/",
    image: jateImg,
    skills: "JavaScirpt, Node.js, Express.js, Webpack, Babel"
  },
 
]

export default function Projects() {
  return (
      <div id="Work">
          <section className="card">
              <aside>
                  <h2>Work</h2>
              </aside>
          </section>
          <section className="card work">
              {projectInfo.map((project) => (
                  <Project
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      repo={project.repo}
                      deployed={project.deployed}
                      image={project.image}
                      skills={project.skills}
                  />
              ))}
          </section>
      </div>
  );
}