import React, { useState, useContext } from "react";
import './Box.css';
import  ThemeProvider  from "../context/ThemeContext";

const Box = ({link, name, imgURL, varStyle}) => {

    const [mouseEnter, setMouseEnter] = useState(false);
    const {theme} = useContext(ThemeProvider);

    return(
        <div className={`box ${theme}`}onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} style={{...mouseEnter ? {transform: `translateX(62%)`} : {}, "--i": varStyle}}>
            <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer">
                <img src={imgURL} alt={name} />
            </a>
        </div>
    );
}

export default Box;