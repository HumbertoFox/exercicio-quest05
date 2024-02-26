import axios from "axios";
import { URL_API, POKEMON_QUANTITY } from "./variables";

const urlApiFetch = async () => {
    const response = await axios.get(`${URL_API}pokemon?limit=${POKEMON_QUANTITY}&offset=0`);
    return await response.data;
};

const urlApiFetchId = async (id) => {
    const response = await axios.get(`${URL_API}pokemon/${id}`);
    return await response.data;
};

const urlApiFetchImg = async (name) => {
    const urlName = await axios.get(`${URL_API}pokemon/${name}`);
    const urlData = await urlName.data;
    const urlSprites = await urlData.sprites;
    // const urlOther = await urlSprites.other;
    // const urlShowdown = await urlOther.showdown;
    // return await urlShowdown;
    return await urlSprites
};

const urlApiFetchType = async () => {
    const urlTypes = await axios.get(`${URL_API}type/`);
    const urlDataResults = await urlTypes.data.results;
    const response = await urlDataResults.filter(type => type.name !== "unknown" && type.name !== "shadow");
    return await response;
};

const urlApiFetchTypeSelected = async (typeSelected) => {
    const urlAllTypes = await axios.get(`${URL_API}type/${typeSelected}/`);
    const pokemonsListTypes = await urlAllTypes.data.pokemon;
    const response = await pokemonsListTypes.map(pokemonType => pokemonType.pokemon);
    return await response;
};

const urlApiFetchAbilities = async (name) => {
    const urlAbilitiesPokemon = await axios.get(`${URL_API}ability/${name}`);
    const abilitiesData = urlAbilitiesPokemon.data;
    const response = await abilitiesData.effect_entries.filter(results => results.language.name === "en");
    return await response;
};

export { urlApiFetch, urlApiFetchId, urlApiFetchImg, urlApiFetchType, urlApiFetchTypeSelected, urlApiFetchAbilities };