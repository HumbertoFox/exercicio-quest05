import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlApiFetchId, urlApiFetchImg } from "../../services/services";

export const CardPokemon = ({ name }) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemonId, setPokemonId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateFetchId = async () => {
        try {
            const response = await urlApiFetchId(name);
            setPokemonId(response);
        } catch (error) {
            setError(error.message);
        }
    };

    const updateFetchName = async () => {
        try {
            const response = await urlApiFetchImg(name);
            setPokemon(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        updateFetchName();
        updateFetchId();
    }, [name]);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (error) {
        return <span>Error: {error}</span>;
    }

    if (!pokemon || !pokemonId) {
        return <span>-</span>;
    }

    return (
        <>
            <h2>{pokemonId.name}</h2>
            <Link to={`/details/${pokemonId.id}`}>
                <img src={pokemon.back_default} alt={`Image ${pokemonId.name}`} />
                <img src={pokemon.front_default} alt={`Image ${pokemonId.name}`} />
            </Link>
        </>
    );
};
