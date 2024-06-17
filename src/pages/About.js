import React from 'react';
import './About.css';

function About() {
    return (
        <div id="about">
            <hr/>
            <h1>About Me</h1>
            <div className="about-block text-container">
                <p>
                    My transition from linguistics to software development started with a Harvard CS50 course, which ignited my passion for coding.
                    Since then, I’ve completed a full stack software development bootcamp at Zip Code Wilmington and continue to refine my skills through The Odin Project, personal projects, and daily <a href='https://leetcode.com/u/Louidoo27/' target="_blank" rel="nofollow, noindex, noreferrer">LeetCode</a> challenges.
                    <br/><br/>
                    I specialize in Java and Spring Boot, with a strong focus on building full stack applications.
                    Additionally, I’m proficient in React, Postgres, and object detection using OpenCV. 
                    My coding toolkit includes languages like Python, JavaScript, and SQL, and I'm continuously exploring new technologies to stay ahead of the curve.
                    <br/><br/>
                    When I'm not coding, you can find me delving into my other passions like trail running, rock climbing, exploring new languages, or diving into a new anime.
                    These interests fuel my creativity and provide a well-rounded perspective that I bring to my professional work.
                    <br/><br/>
                    I’m always excited to connect with like-minded individuals and explore new opportunities in the tech world.
                    Let’s connect and see how we can collaborate on innovative projects!
                </p>
            </div>
        </div>
    )
}

export default About;