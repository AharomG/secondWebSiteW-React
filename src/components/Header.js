import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const {theme, handleTheme} = useContext(ThemeContext);

    return(
        <>
            <header className={`header ${theme}`}><button type="button" onClick={handleTheme}>{(theme === "light") ? "Dark" : "Light"}</button></header>
        </>
    );
}

export default Header;