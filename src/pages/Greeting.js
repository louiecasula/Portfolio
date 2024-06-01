import React from 'react';
import './Greeting.css';
import LouieHeadshot from '../images/LouieHeadshot.JPG';

function Greeting() {
    return (
        <div className="greeting-block">
            <img className="greeting-image" src={LouieHeadshot} alt="Louie's headshot"/>
            <div className="text-container">
                <h1>Hi, I'm Louie Casula</h1>
                <p>an aspiring full-stack software developer looking for work in the Greater Philadelphia area</p>
            </div>
        </div>
    )
}

export default Greeting;