import React, { useContext, useEffect, useState } from "react";
import { DivForm, Section, UlList } from "../../components/styles/homestyle"
import { ThemeContext } from "../../components/contexts/themecontext";
import { urlApiFetch } from "../../services/services";
import { CardPokemon } from "../../components/card/pokemoncard";
import { FormSearchList } from "../../components/form/inputs";
import { ButtonNext } from "../../components/button/buttonnext";
import { SelectType } from "../../components/form/selects";
import axios from "axios";
var urlNext;
var increment;

export const Home = () => {

    const [pokemonList, setPokemonList] = useState(null);
    const [listTypeSelected, setListTypeSelected] = useState([]);
    const { theme } = useContext(ThemeContext);

    const urlApiGet = async () => {
        urlNext = await urlApiFetch();
    };

    const updateList = async () => {
        const resUrl = await axios.get(urlNext.next);
        urlNext = await resUrl.data;
        setPokemonList(response => [...response, ...urlNext.results]);
    };

    function newListPokemon(newList) {
        setPokemonList(newList);
    };

    function pokeTypeList(pokeListType) {
        increment = 10;

        if (pokeListType !== null) {
            setListTypeSelected(pokeListType);
            const response = pokeListType.slice(0, increment);
            setPokemonList(response);
            if (pokeListType.length === 10) {
                urlApiGet();
            };
        };
    };

    function listTypeSelect() {
        if (increment === listTypeSelected.length) {
            alert("Pokemon type limit, please select another type...")
        };

        increment += 10;

        if (listTypeSelected.length !== increment) {
            const response = listTypeSelected.slice(0, increment);
            setPokemonList(response);
            if (listTypeSelected.length < increment) {
                increment = listTypeSelected.length;
            };
        };
    };

    useEffect(() => {
        const getfetch = async () => {
            urlNext = await urlApiFetch();
            const response = await urlNext.results;
            setPokemonList(response);
        };

        getfetch();
    }, []);

    if (pokemonList === null) {
        return (
            <span>-</span>
        );
    };

    return (
        <Section style={{ color: theme.color, backgroundColor: theme.backgroundColor }} className={theme.color}>
            <DivForm>
                <FormSearchList pokemonSearchList={pokemonList} pokemon={newListPokemon} />
                <SelectType pokeTypeSelectedList={pokeTypeList} />
            </DivForm>
            <UlList className={theme.color}>
                {
                    pokemonList.map((pokemonUnid, index) => {
                        return (
                            <li key={index}>
                                <CardPokemon name={pokemonUnid.name} />
                            </li>
                        );
                    })
                }
            </UlList>
            <ButtonNext onClick={listTypeSelected.length === 10 || listTypeSelected.length === 0 ? () => updateList() : () => listTypeSelect()}>
                {"Load More"}
            </ButtonNext>
        </Section>
    );
};