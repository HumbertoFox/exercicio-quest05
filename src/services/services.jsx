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
    const urlOther = await urlSprites.other;
    const urlShowdown = await urlOther.showdown;
    return await urlShowdown;
};

const urlApiFetchType = async () => {
    const response = await axios.get(`${URL_API}type/`);
    return await response.data;
};

const urlApiFetchTypeSelected = async (typeSelected) => {
    const response = await axios.get(`${URL_API}type/${typeSelected}/`);
    return await response.data;
};

const urlApiFetchAbilities = async (name) => {
    const response = await axios.get(`${URL_API}ability/${name}`);
    const resData = response.data;
    const resFilter = await resData.effect_entries.filter(results => results.language.name === "en");
    return await resFilter;
};

export { urlApiFetch, urlApiFetchId, urlApiFetchImg, urlApiFetchType, urlApiFetchTypeSelected, urlApiFetchAbilities };