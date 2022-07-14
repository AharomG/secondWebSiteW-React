import React, { useContext } from "react";
import './Theme.css';
import './Welcome.css';
import Home from "../assets/welcome.png"
import ThemeContext from "../context/ThemeContext";

const Welcome = () => {
    const {theme} = useContext(ThemeContext);
    return(
        <div className={`welcome ${theme}`}>
            <a 
                className='modalsLink'
                href="http://localhost:3000/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Home} alt="Welcome"/>
            </a>
            <p>
                Hello! Welcome to my page. I'm an informatics engineer student about to go into his 4th year of carrer, I made this site to show a little bit of my skills. Here I have all of my other projects. Enjoy cheking the code! 
            </p>
        </div>
    );
}

export default Welcome;