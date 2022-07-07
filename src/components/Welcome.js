import React from "react";
import './Welcome.css';
import Home from "../assets/home.png"

const Welcome = () => {
    return(
        <span className="welcome">
            <a 
                className='modalsLink'
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Home} alt="Home"/>
            </a>
            <p>
                Hello! Welcome to my page. I'm an informatics engineer student about to go into his 4th year of carrer, I made this site to show a little bit of my skills. Here I have all of my other projects. Enjoy cheking the code! 
            </p>
        </span>
    );
}

export default Welcome;