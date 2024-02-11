import { Header } from "../styles/headerstyle";

export const HeaderPage = () => {
    return (
        <Header>
            <img className="img-pokemon" src="../../src/assets/images/pokemon-logo-png-1421.png" alt="Logo pokémon" />
            <img className="img-pokedex" src="../../src/assets/images/pokedex.png" alt="Logo Pokedex" />
            <button>teste</button>
        </Header>
    );
};