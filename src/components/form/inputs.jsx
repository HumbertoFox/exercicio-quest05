import { useForm } from "react-hook-form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
library.add(fas);

export const FormSearchList = ({ pokemonSearchList, pokemon }) => {

    const [pokemonSearch, setPonkemonSearch] = useState(pokemonSearchList);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitList = async (data) => {
        setPonkemonSearch(pokemonSearchList.filter(pokeName => pokeName.name === data.name));
    };

    useEffect(() => {
        setPonkemonSearch(pokemonSearchList);
    }, []);

    useEffect(() => {
        pokemonSearch.length !== 0 ?
            pokemon(pokemonSearch) :
            pokemon(pokemonSearchList);
    }, [pokemonSearch]);


    return (
        <form onSubmit={handleSubmit(handleSubmitList)} >
            <FontAwesomeIcon icon="fas fa-search" />
            <input
                type="search"
                id="name"
                placeholder="Nome do Pokemon na lista"
                {
                ...register('name', {
                    required: true,
                    minLength: 3,
                })
                } />
            <input type="submit" value="Pesquisar" />
        </form>
    );
};