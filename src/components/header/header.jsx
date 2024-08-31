import React, { useContext } from "react";
import { ThemeContext, Themes } from "../contexts/themecontext";
import { Header, ImgPoKeMoN, ImgPokeDex, BtnToggle, SpanToggle } from "../styles/headerstyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import LogoPokemon from "../../assets/pokemon_logo.png";
import LogoPokedex from "../../assets/pokedex.png";
library.add(fas);

export const HeaderPage = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <Header style={{ color: theme.color, backgroundColor: theme.backgroundColor }}>
            <ImgPoKeMoN src={LogoPokemon} alt="Logo pokémon" />
            <ImgPokeDex src={LogoPokedex} alt="Logo Pokédex" />
            <BtnToggle>
                <SpanToggle data-testid="span" onClick={() => theme === Themes.light ? setTheme(Themes.dark) : setTheme(Themes.light)} className={theme} />
                <FontAwesomeIcon icon={["fas", "sun"]} />
                <FontAwesomeIcon icon={["fas", "moon"]} />
            </BtnToggle>
        </Header>
    );
};