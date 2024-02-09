import axios from "axios";
import { URL_API, POKEMON_QUANTITY } from "./variables";

const urlApiFetch = async () => {
    const response = await axios.get(`${URL_API}pokemon?limit=${POKEMON_QUANTITY}&offset=0`);
    return response.data;
};

const urlApiFetchId = async (id) => {
    const response = await axios.get(`${URL_API}pokemon/${id}`);
    return  await response.data;
};

const urlApiFetchName = async (name) => {
    const response = await axios.get(`${URL_API}pokemon/${name}`);
    return await response.data;
};

const urlApiFetchimg = async (name) => {
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

export { urlApiFetch, urlApiFetchName, urlApiFetchId, urlApiFetchimg, urlApiFetchType, urlApiFetchTypeSelected };