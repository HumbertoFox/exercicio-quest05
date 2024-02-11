import { useForm } from "react-hook-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
library.add(fas);

export const FormSearchList = ({ pokemonSearchList, pokemon }) => {

    const [pokemonSearch, setPokemonSearch] = useState(pokemonSearchList);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitList = async (data) => {
        const filteredPokemon = pokemonSearchList.filter(pokeName => pokeName.name === data.name);
        setPokemonSearch(filteredPokemon);
    };

    useEffect(() => {
        setPokemonSearch(pokemonSearchList);
    }, [pokemonSearchList]);

    useEffect(() => {
        pokemonSearch.length !== 0 ?
            pokemon(pokemonSearch) :
            pokemon(pokemonSearchList);
    }, [pokemonSearch]);


    return (
        <form onSubmit={handleSubmit(handleSubmitList)} >
            <FontAwesomeIcon icon={["fas", "search"]} />
            <input
                type="search"
                id="name"
                placeholder="Name in the list"
                {
                ...register('name', {
                    required: true,
                    minLength: 3,
                })
                } />
            <input type="submit" value="Search" />
        </form>
    );
};
