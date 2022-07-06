import React from "react";
import './Box.css';

const Box = ({link, name, imgURL}) => {
    return(
        <div className="box">
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