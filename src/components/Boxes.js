import React from "react";
import Box from "./Box";
import linkedin from "../assets/linkdin.png"
import Octocat from '../assets/Octocat.png';
import cv from "../assets/CV_icon.png"


const Boxes = () => {
    

    return(
        <div className='boxes'>
            <Box link="https://github.com/AharomG" name="GitHub" imgURL={Octocat} varStyle="1"/>
            <Box link="https://www.linkedin.com/in/aharom-gonzalez-anaure/" name="LinkedIn" imgURL={linkedin} varStyle="2"/>
            <Box link="https://drive.google.com/file/d/1sjFKlQaiXjihU1mOBKqfWAg3-33xPJjQ/view?usp=sharing" name="Resumee" imgURL={cv} varStyle="3"/>
        </div>
    );
}

export default Boxes;