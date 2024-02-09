import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlApiFetchName, urlApiFetchimg } from "../../services/services";
import { Div } from "../styles/cardstyle";

export const CardPokemon = ({ name }) => {

    const [pokemon, setPonkemon] = useState(null);
    const [pokemonId, setPonkemonId] = useState(null);

    const updatefetchId = async () => {
        await urlApiFetchName(name).then(response => setPonkemonId(response));
    };    

    const updateFetchName = async () => {
        await urlApiFetchimg(name).then(response => setPonkemon(response));
    };

    useEffect(() => {
        updateFetchName();
        updatefetchId();
    }, []);

    if (pokemon === null || pokemonId === null) {
        return (
            <span>-</span>
        );
    };

    return (
        <>
            {
                <Div className="div-card">
                    <h2>{pokemonId.name}</h2>
                    <Link to={`/details/${pokemonId.id}`}>
                        <img className="back" src={pokemon.back_default}
                            alt={`Imagem ${pokemon.name}`} />
                        <img className="front" src={pokemon.front_default}
                            alt={`Imagem ${pokemonId.name}`} />
                    </Link>
                </Div>
            }
        </>
    );
};