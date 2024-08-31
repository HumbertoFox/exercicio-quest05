import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { BtnSearchNext } from "../styles/homestyle";
import ImgBtnSearch from "../../assets/pokeball.png";
library.add(fas);

export const FormSearchList = ({ pokemonSearchList, pokemon }) => {

    const [pokemonSearch, setPokemonSearch] = useState(pokemonSearchList);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitList = async (data) => {
        const filteredPokemon = pokemonSearchList.filter(pokeName => pokeName.name.includes(data.name));
        if (filteredPokemon.length == 0) {
            alert("Pokemon is not on the list below or name does not exist");
        } else {
            setPokemonSearch(filteredPokemon);
        };
    };

    useEffect(() => {
        setPokemonSearch(pokemonSearchList);
    }, [pokemonSearchList]);

    useEffect(() => {
        pokemonSearch.length !== 0 ? pokemon(pokemonSearch) : pokemon(pokemonSearchList);
    }, [pokemonSearch]);

    return (
        <form onSubmit={handleSubmit(handleSubmitList)} >
            <FontAwesomeIcon icon={["fas", "search"]} />
            <input
                type="search"
                id="name"
                placeholder={`${errors.name ? "Min 3 characters" : "Name in the list"}`}
                className={`${errors.name ? "required" : ""}`}
                {...register('name', { required: "Required field", minLength: 3, })
                } />
            <BtnSearchNext type="submit" title="Search Pokemon"><img src={ImgBtnSearch} alt="pokeball icon" /></BtnSearchNext>
        </form>
    );
};
