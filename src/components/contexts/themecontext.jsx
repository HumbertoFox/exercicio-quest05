import { createContext } from "react";

const Themes = {
    light: {
        color: "#000",
        background: "#FFF"
    },
    dark: {
        color: "#FFF",
        background: "#000"
    }
};

const ThemeContext = createContext({});

const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={{Themes}}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export { ThemeContext, Themes, ThemeProvider };