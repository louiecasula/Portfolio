import React from 'react';
import './Portfolio.css';
import Projects from '../components/Projects';

function Portfolio() {
    return (
        <div id="portfolio">
            <hr/>
            <h1>Portfolio</h1>
            <div className="projects">
                <Projects />
            </div>
        </div>
    )
}

export default Portfolio;