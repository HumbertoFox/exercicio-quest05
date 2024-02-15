import { useEffect, useState } from "react";
import { urlApiFetchAbilities, urlApiFetchId, urlApiFetchImg } from "../../services/services";
import { Link, useParams } from "react-router-dom";
import { AbilitiesInfo, AbilitiesSub, Container, DivImg, DivOl, MainDetails, Section, TypesDiv, TypesOl } from "../../components/styles/detailsstyle";
import { CardPokemon } from "../../components/card/pokemoncard";

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
        return <Section>Loading...</Section>;
    }
    return (
        <Section>
            <h1>Pokémon Details</h1>
            <Container>
                <DivImg>
                    <CardPokemon name={pokemonId.name} />
                </DivImg>
                <MainDetails>
                    <TypesOl>
                        <TypesDiv>
                            <h2>Types</h2>
                            <div>
                                {pokemonId.types.map((types, index) => (
                                    <h3 key={index}>{types.type.name}</h3>
                                ))}
                            </div>
                        </TypesDiv>
                        <DivOl>
                            <h2>Moves List</h2>
                            <ol>
                                {pokemonMoves.map((resMove, index) => (
                                    <li key={index}>
                                        {resMove.move.name}
                                    </li>
                                ))}
                            </ol>
                        </DivOl>
                    </TypesOl>
                    <AbilitiesInfo>
                        <h2>Abilities List</h2>
                        <AbilitiesSub>
                            {pokemonAbilities.map((ability, index) => (
                                <div key={index}>
                                    <h3 className="h3-abilit">{ability.name}</h3>
                                    <p>{ability.effect}</p>
                                    <p>{ability.shortEffect}</p>
                                </div>
                            ))}
                        </AbilitiesSub>
                    </AbilitiesInfo>
                </MainDetails>
            </Container>
            <Link to={`/`}>Back to Home</Link>
        </Section>
    );
};
