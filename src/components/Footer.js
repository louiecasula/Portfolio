import React, { useRef } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';

function Footer() {
    const iconRef = useRef(null);

    const handleMouseEnter = () => {
    iconRef.current.style.animationName = 'spin';
    };

    const handleMouseLeave = () => {
    iconRef.current.style.animationName = 'spinBack';
    };

    return (
        <footer>
            <div>
                <a href="https://github.com/louiecasula" target="_blank">
                    <GitHubIcon style={{ fontSize: '2rem' }} ref={iconRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                </a>
                <a href="https://www.linkedin.com/in/louie-casula/" target="_blank">
                    <LinkedInIcon style={{ fontSize: '2rem' }} ref={iconRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                </a>
                <a href="mailto:louiecasula@gmail.com" target="_blank">
                    <EmailIcon style={{ fontSize: '2rem' }} ref={iconRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                </a>
            </div>
            <p>Copyright © 2024 The Leuth</p>
        </footer>
    );
}
export default Footer;