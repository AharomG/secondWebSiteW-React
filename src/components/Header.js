import React from "react";

const Header = (theme) => {
    return(
        <>
            <header className="header"><button type="button" >{theme}</button></header>
        </>
    );
}

export default Header;