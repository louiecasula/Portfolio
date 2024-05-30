import React from 'react';
import './Portfolio.css';
import Projects from '../components/Projects';

function Portfolio() {
    return (
        <>
            <hr/>
            <h1 id="portfolio">Portfolio</h1>
            <div className="projects">
                <Projects />
            </div>
        </>
    )
}

export default Portfolio;