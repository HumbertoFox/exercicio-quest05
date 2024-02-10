import { useEffect, useState } from "react";
import { urlApiFetchAbilities, urlApiFetchId, urlApiFetchImg } from "../../services/services";
import { Link, useParams } from "react-router-dom";
import { Section } from "../../components/styles/detailsstyle";

export const Details = () => {

    const [pokemonId, setPokemonId] = useState(null);
    const [pokemonImg, setPokemonImg] = useState(null);
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const idData = await urlApiFetchId(id);
                const imgData = await urlApiFetchImg(id);
                const movesData = idData.moves;
                const abilitiesData = idData.abilities.map(async (ability) => {
                    const abilityDetails = await urlApiFetchAbilities(ability.ability.name);
                    return {
                        name: ability.ability.name,
                        effect: abilityDetails[0].effect,
                        shortEffect: abilityDetails[0].short_effect
                    };
                });
                setPokemonId(idData);
                setPokemonImg(imgData);
                setPokemonMoves(movesData);
                setPokemonAbilities(await Promise.all(abilitiesData));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [id]);

    if (!pokemonId || !pokemonImg || !pokemonMoves || !pokemonAbilities) {
        return <div>Loading...</div>;
    }

    return (
        <Section>
            <h1 className="h1-info">Detalhes do Pokémon</h1>
            <div className="div-info">
                <div className="div-img-name">
                    <h2>{pokemonId.name}</h2>
                    <img src={pokemonImg.front_default} alt={`imagem pokemon ${pokemonId.name} frente`} />
                    <img src={pokemonImg.back_default} alt={`imagem pokemon ${pokemonId.name} traz`} />
                </div>
                <div>
                    <div className="div-ol">
                        <h2 className="h2-ol">Lista de Movimentos</h2>
                        <ol className="ol-moves">
                            {pokemonMoves.map((resMove, index) => (
                                <li className="li-moves" key={index}>
                                    {resMove.move.name}
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="div-abilities-info">
                        <h2 className="h2-div">Lista de Habilidades</h2>
                        <div className="div-abilities">
                            {pokemonAbilities.map((ability, index) => (
                                <div key={index}>
                                    <h3 className="h3-abilit">{ability.name}</h3>
                                    <p>{ability.effect}</p>
                                    <p>{ability.shortEffect}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Link className="link-home" to={`/`}>Voltar a página Inicial</Link>
        </Section>
    );
};
