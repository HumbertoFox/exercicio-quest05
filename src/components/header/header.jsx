import React, { useEffect, useState } from "react";
import { Header, ImgPoKeMoN, ImgPokeDex, BtnToggle, SpanToggle } from "../styles/headerstyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export const HeaderPage = () => {
    
    const [toggleSelect, setToggleSelect] = useState("ligth");

    const toggleClick = () => {

        if(toggleSelect === "ligth") {
            setToggleSelect("dark")
        } else {
            setToggleSelect("ligth")
        };
    };

    return (
        <Header>
            <ImgPoKeMoN src="../../src/assets/images/pokemon-logo-png-1421.png" alt="Logo pokémon" />
            <ImgPokeDex src="../../src/assets/images/pokedex.png" alt="Logo Pokedex" />
            <BtnToggle>
                <SpanToggle onClick={() => toggleClick(toggleSelect)} className={toggleSelect} />
                <FontAwesomeIcon icon={["fas", "sun"]} />
                <FontAwesomeIcon icon={["fas", "moon"]} />
            </BtnToggle>
        </Header>
    );
};