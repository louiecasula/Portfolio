import React from 'react';
import './Greeting.css';
import LouieHeadshot from '../images/LouieHeadshot.JPG';

function Greeting() {
    return (
        <>
            <h1>Hi, I'm Louie Casula</h1>
            <div className="greeting-block">
                <img className="greeting-image" src={LouieHeadshot} alt="Louie's headshot"/>
                <p>an aspiring full-stack software developer working out of the greater Philadelphia area</p>
            </div>
        </>
    )
}

export default Greeting;