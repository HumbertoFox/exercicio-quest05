import { Header, ImgPoKeMoN, ImgPokeDex } from "../styles/headerstyle";

export const HeaderPage = () => {
    return (
        <Header>
            <ImgPoKeMoN src="../../src/assets/images/pokemon-logo-png-1421.png" alt="Logo pokémon" />
            <ImgPokeDex src="../../src/assets/images/pokedex.png" alt="Logo Pokedex" />
            <button>teste</button>
        </Header>
    );
};