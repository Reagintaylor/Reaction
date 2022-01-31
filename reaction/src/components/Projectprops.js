import React from 'react';


//function to output project cards
export default function Project(props) {


    return (
        <section className="work-card">
            <img className={props.id} alt='project images' src={props.image} height="400px" width="500px" onClick={handleClick}></img>
            <div className="card text ">
                <a href={props.deployed} target="_blank" rel="noopener noreferrer">
                    <h4> {props.title} </h4>
                </a>
                <p> {props.description}</p>
                <p>
                    <a href={props.repo} target="_blank" rel="noopener noreferrer">Github link </a>
                    <br></br> <br></br>
                    Coding Skills:<br></br>
                    {props.skills}
                </p>
            </div>
        </section>
    )
}
