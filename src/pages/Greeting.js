import React from 'react';
import './Greeting.css';
import LouieHeadshot from '../images/LouieHeadshot.JPG';

function Greeting() {
    return (
        <div className="greeting-block">
            <img className="greeting-image" src={LouieHeadshot} alt="Louie's headshot"/>
            <div className="text-container">
                <h1>Hi, I'm <span id="name">Louie</span>.</h1>
                <p>I'm an aspiring <b>full stack software developer</b> looking for work in the Greater Philadelphia area.</p>
            </div>
        </div>
    )
}

export default Greeting;