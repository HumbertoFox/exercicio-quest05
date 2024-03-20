import React, { useContext } from "react";
import {
    ThemeContext,
    Themes
} from "../contexts/themecontext";
import {
    Header,
    ImgPoKeMoN,
    ImgPokeDex,
    BtnToggle,
    SpanToggle
} from "../styles/headerstyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const HeaderPage = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Header style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <ImgPoKeMoN src="../../assets/images/pokemon-logo-png-1421.png" alt="Logo pokémon" />
            <ImgPokeDex src="../../assets/images/pokedex.png" alt="Logo Pokédex" />
            <BtnToggle>
                <SpanToggle data-testid="span" onClick={() => theme === Themes.light ?
                    setTheme(Themes.dark) :
                    setTheme(Themes.light)}
                    className={theme} />
                <FontAwesomeIcon icon={["fas", "sun"]} />
                <FontAwesomeIcon icon={["fas", "moon"]} />
            </BtnToggle>
        </Header>
    );
};