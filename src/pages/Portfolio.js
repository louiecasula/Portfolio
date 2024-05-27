import React from 'react';
import './Portfolio.css';
import Projects from '../components/Projects';

function About() {
    return (
        <>
            <h1 id="portfolio">Portfolio</h1>
            <div className="projects">
                <Projects />
            </div>
        </>
    )
}

export default About;