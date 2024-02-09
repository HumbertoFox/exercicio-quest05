import { useEffect, useState } from "react";
import { urlApiFetchId } from "../../services/services";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Details = () => {

    const [pokemonId, setPonkemonId] = useState([]);
    const [pokemonImg, setPonkemonImg] = useState([]);
    const [pokemonMoves, setPonkemonMoves] = useState([]);
    const [pokemonAbilitsName, setPonkemonAbilitsName] = useState([]);
    const { id } = useParams();

    const getApiPokemonsId = async () => {
        await urlApiFetchId(id).then(response => setPonkemonId(response));
    };

    const getpokemonImg = async () => {
        const resSprites = await urlApiFetchId(id).then(response => response.sprites);
        const resOther = await resSprites.other;
        setPonkemonImg(resOther.showdown);
    };

    const getpokemonMoves = async () => {
        const resMoves = await urlApiFetchId(id).then(response => response.moves);
        setPonkemonMoves(resMoves);
    };

    const getpokemonAbilits = async () => {
        const resAbilitsName = await urlApiFetchId(id).then(response => response.abilities);
        setPonkemonAbilitsName(resAbilitsName);
    };

    useEffect(() => {
        getApiPokemonsId();
        getpokemonImg();
        getpokemonMoves();
        getpokemonAbilits();
    }, []);

    if (pokemonId === null) {
        <span>-</span>
    }

    return (
        <>
            <img src={pokemonImg.front_default} alt={`imagem pokemon ${pokemonId.name} frente`} />
            <img src={pokemonImg.back_default} alt={`imagem pokemon ${pokemonId.name} traz`} />
            <h2>{pokemonId.name}</h2>
            <div>
                {
                    pokemonMoves.map((resMove, index) => {
                        return (
                            <p key={index}>
                                {resMove.move.name}
                            </p>
                        )
                    })
                }
            </div>
            <div>
                {
                    pokemonAbilitsName.map((resAbilit, index) => {
                        const getDestailsAbilities = async () => {
                            const resData = await axios.get(resAbilit.ability.url).then(response => response.data);
                            resEffect = await resData.effect_entries.filter(results => results.language.name === "en");
                        };
                       getDestailsAbilities();
                        return (
                            <div key={index}>
                                <p>
                                    {resAbilit.ability.name}
                                </p>
                                <p>
                                    { }
                                </p>
                                <p>
                                    { }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};