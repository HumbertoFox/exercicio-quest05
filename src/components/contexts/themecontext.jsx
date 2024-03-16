import {
    createContext,
    useState
} from "react";

const Themes = {
    light: {
        color: "#000",
        backgroundColor: "#FFF"
    },
    dark: {
        color: "#FFF",
        backgroundColor: "#333"
    }
};

const ThemeContext = createContext({});


const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(Themes.light)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
};

export {
    Themes,
    ThemeContext,
    ThemeProvider
};