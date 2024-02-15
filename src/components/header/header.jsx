import React, { useContext } from "react";
import { ThemeContext, Themes } from "../contexts/themecontext";
import { Header, ImgPoKeMoN, ImgPokeDex, BtnToggle, SpanToggle } from "../styles/headerstyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const HeaderPage = () => {
    
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleClick = () => {

        if(theme === Themes.light) {
            setTheme(Themes.dark)
        } else {
            setTheme(Themes.light)
        };
    };

    return (
        <Header>
            <ImgPoKeMoN src="../../src/assets/images/pokemon-logo-png-1421.png" alt="Logo pokémon" />
            <ImgPokeDex src="../../src/assets/images/pokedex.png" alt="Logo Pokedex" />
            <BtnToggle>
                <SpanToggle onClick={() => toggleClick()} className={theme} />
                <FontAwesomeIcon icon={["fas", "sun"]} />
                <FontAwesomeIcon icon={["fas", "moon"]} />
            </BtnToggle>
        </Header>
    );
};