import React from 'react';
import './About.css';
import LouieHeadshot from '../images/LouieHeadshot.JPG';

function About() {
    return (
        <>
            <h1>About Me</h1>
            <div className="about-block">
                <img className="about-image" src={LouieHeadshot} alt="Louie's headshot"/>
                <p>Here is a long paragraph about how I became a programmer. </p>
            </div>
            <div className="about-block">
                <p>Here is another long paragraph about how I became a programmer. </p>
                <img className="about-image" src={LouieHeadshot} alt="Louie's headshot"/>
            </div>
        </>
    )
}

export default About;