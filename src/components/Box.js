import React, { useState } from "react";
import './Box.css';

const Box = ({link, name, imgURL, varStyle}) => {

    const [mouseEnter, setMouseEnter] = useState(false);

    return(
        <div className="box" onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} style={{...mouseEnter ? {transform: `translateX(62%)`} : {}, "--i": varStyle}}>
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