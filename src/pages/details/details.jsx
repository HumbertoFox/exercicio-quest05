import { useEffect, useState } from "react";
import { urlApiFetchId, urlApiFetchImg } from "../../services/services";
import { Link, useParams } from "react-router-dom";
import { Section } from "../../components/styles/detailsstyle";
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
        await urlApiFetchImg(id).then(response => setPonkemonImg(response));
    };

    const getpokemonMoves = async () => {
        await urlApiFetchId(id).then(response => setPonkemonMoves(response.moves));
    };

    const getpokemonAbilits = async () => {
        await urlApiFetchId(id).then(response => setPonkemonAbilitsName(response.abilities));
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
        <Section>
            <h1 className="h1-info">Detalhes do Pokémon</h1>
            <div className="div-info">
                <div className="div-img-name">
                    <img src={pokemonImg.front_default} alt={`imagem pokemon ${pokemonId.name} frente`} />
                    <img src={pokemonImg.back_default} alt={`imagem pokemon ${pokemonId.name} traz`} />
                    <h2>{pokemonId.name}</h2>
                </div>
                <div>
                    <div className="div-ol">
                        <h2>Lista de Movimentos</h2>
                        <ol className="ol-moves">
                            {
                                pokemonMoves.map((resMove, index) => {
                                    return (
                                        <li className="li-moves" key={index}>
                                            {resMove.move.name}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                    <div className="div-abilities-info">
                        <h2>Lista de Habilidades</h2>
                        <div className="div-abilities">
                            {
                                pokemonAbilitsName.map((resAbilit, index) => {
                                    //     const getDestailsAbilities = async () => {
                                    //         const resData = await axios.get(resAbilit.ability.url).then(response => response.data);
                                    //         resEffect = await resData.effect_entries.filter(results => results.language.name === "en");
                                    //     };
                                    //    getDestailsAbilities();
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
                    </div>
                </div>
            </div>
            <Link className="link-home" to={`/`}>Voltar a página Inicial</Link>
        </Section>
    )
};