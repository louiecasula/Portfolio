import React from 'react';
import './Greeting.css';
import LouieHeadshot from '../images/LouieHeadshot.JPG';

function Greeting() {
    return (
        <div className="greeting-block">
            <img className="greeting-image" src={LouieHeadshot} alt="Louie's headshot"/>
            <div className="text-container">
                <h1>Hi, I'm <span id="name" className="glow">Louie</span>.</h1>
                <p>I'm a passionate and dedicated <b>software developer</b> with a background in linguistics and foreign languages.</p>
            </div>
        </div>
    )
}

export default Greeting;