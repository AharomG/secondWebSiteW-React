import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    const [ bttonTxt, setBttnTxt ] = useState((theme === "light") ? "Dark" : "Light");

    const handleBttnTxt = () => {
        if(bttonTxt === "Dark"){
            setBttnTxt("Light");
        }else if(bttonTxt === "Light"){
            setBttnTxt("Dark");
        }
    }

    return(
        <>
            <header className={`header ${theme}`}><button type="button" name={theme} onClick={(e) => {handleTheme(e); handleBttnTxt();}}>{bttonTxt}</button></header>
        </>
    );
}

export default Header;