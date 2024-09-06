import React, { useContext, useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { urlApiFetchAbilities, urlApiFetchId } from "../../services/services";
import { CardPokemon } from "../../components/card/pokemoncard";
import { ThemeContext } from "../../components/contexts/themecontext";
import { AbilitiesInfo, AbilitiesSub, Container, DivImg, DivOl, MainDetails, Section, TypesDiv, TypeH3, TypesOl, DinLeft, DivRight } from "../../components/styles/detailsstyle";
library.add(far);

export const Details = () => {

    const [pokemonId, setPokemonId] = useState(null);
    const [pokemonMoves, setPokemonMoves] = useState([]);
    const [pokemonAbilities, setPokemonAbilities] = useState([]);
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const idData = await urlApiFetchId(id);
                const movesData = idData.moves;
                const abilitiesData = idData.abilities.map(async (ability) => {
                    const abilityDetails = await urlApiFetchAbilities(ability.ability.name);
                    const fillLength = abilityDetails.length - 1;
                    return {
                        name: ability.ability.name,
                        flavor_text: abilityDetails[fillLength].flavor_text
                    };
                });
                setPokemonId(idData);
                setPokemonMoves(movesData);
                setPokemonAbilities(await Promise.all(abilitiesData));
            } catch (error) {
                console.error("Error fetching data:", error);
            };
        };
        fetchData();
    }, [id]);

    if (!pokemonId || !pokemonMoves || !pokemonAbilities) {
        return <ReactLoading type='spin' color='#3C91E6' width={100} height={100} />;
    };

    return (
        <Section style={{ color: theme.color, backgroundColor: theme.backgroundColor }} className={theme.color}>
            <h1>Pokémon Details</h1>
            <Container>
                <DinLeft className={theme.color} />
                <DivRight className={theme.color} />
                <DivImg>
                    <CardPokemon name={pokemonId.name} />
                </DivImg>
                <MainDetails>
                    <TypesOl>
                        <TypesDiv>
                            <h3>Types</h3>
                            <div>
                                {pokemonId.types.map((types, index) => (
                                    <TypeH3 className={types.type.name} key={index}>{types.type.name}</TypeH3>
                                ))}
                            </div>
                        </TypesDiv>
                        <DivOl>
                            <h3>Moves List</h3>
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
                        <h3>Abilities List</h3>
                        <AbilitiesSub>
                            {pokemonAbilities.map((ability, index) => (
                                <div key={index}>
                                    <h4>{ability.name}</h4>
                                    <p>{ability.flavor_text}</p>
                                </div>
                            ))}
                        </AbilitiesSub>
                    </AbilitiesInfo>
                </MainDetails>
            </Container>
            <Link to={'/'} title="Home"><FontAwesomeIcon icon="fa-regular fa-circle-left" title="Home" role="Home" /></Link>
        </Section>
    );
};
