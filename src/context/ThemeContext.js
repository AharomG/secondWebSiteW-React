import { createContext, useState } from "react";

const ThemeContext = createContext();
const initialTheme = "light";

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);

    const handleTheme = (e) => {
        if(e.target.value === "Light"){
            setTheme("light");
        }else if(e.target.value === "Dark"){
            setTheme("dark");
        }
    }

    const data = {
        theme,
        handleTheme,
    }

    return(
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    );
}

export {ThemeProvider};
export default ThemeContext;