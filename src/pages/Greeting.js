import React from 'react';
// import './Greeting.css';
import LouieHeadshot from '../images/LouieHeadshot.JPG';

function Greeting() {
    return (
        <>
            <h1>Hi, I'm Louie Casula</h1>
            <div className="about-block">
                <img className="about-image" src={LouieHeadshot} alt="Louie's headshot"/>
                <p>Here is a long paragraph about how I became a programmer. </p>
            </div>
        </>
    )
}

export default Greeting;