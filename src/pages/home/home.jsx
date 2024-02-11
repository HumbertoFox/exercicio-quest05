import { useEffect, useState } from "react";
import { Section } from "../../components/styles/homestyle"
import { urlApiFetch } from "../../services/services";
import { CardPokemon } from "../../components/card/pokemoncard";
import { FormSearchList } from "../../components/form/inputs";
import { ButtonNext } from "../../components/button/buttonnext";
import { SelectType } from "../../components/form/selects";
import axios from "axios";
var urlNext;

export const Home = () => {

    const [pokemonList, setPokemonList] = useState(null);

    const updateList = async () => {
        const resUrl = await axios.get(urlNext.next);
        urlNext = await resUrl.data;
        setPokemonList(response => [...response, ...urlNext.results]);
    };

    function newListPokemon(newList) {
        setPokemonList(newList);
    };

    function pokeTypeList(pokeListType) {
        if (pokeListType !== null) {
            setPokemonList(pokeListType);
        };
    };

    useEffect(() => {
        const getfetch = async () => {
            urlNext = await urlApiFetch();
            setPokemonList(urlNext.results);
        };
        getfetch();
    }, []);

    if (pokemonList === null) {
        return (
            <span>-</span>
        );
    };

    return (
        <Section>
            <div className="div-form-select">
                <FormSearchList pokemonSearchList={pokemonList} pokemon={newListPokemon} />
                <SelectType pokeTypeSelectedList={pokeTypeList} />
            </div>
            <ul>
                {
                    pokemonList.map((pokemonUnid, index) => {
                        return (
                            <li key={index}>
                                <CardPokemon name={pokemonUnid.name} />
                            </li>
                        );
                    })
                }
            </ul>
            <ButtonNext onClick={() => updateList()}>{"Load More"}</ButtonNext>
        </Section>
    );
};