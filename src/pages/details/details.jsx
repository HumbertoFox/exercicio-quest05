import React, {
    useContext,
    useEffect,
    useState
} from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import {
    urlApiFetchAbilities,
    urlApiFetchId
} from "../../services/services";
import { CardPokemon } from "../../components/card/pokemoncard";
import { ThemeContext } from "../../components/contexts/themecontext";
import {
    AbilitiesInfo,
    AbilitiesSub,
    Container,
    DivImg,
    DivOl,
    MainDetails,
    Section,
    TypesDiv,
    TypeH3,
    TypesOl,
    DinLeft,
    DivRight
} from "../../components/styles/detailsstyle";

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
        return <Section>Loading...</Section>;
    };

    return (
        <Section style={{ color: theme.color, backgroundColor: theme.backgroundColor }} className={theme.color}>
            <h1>Pokémon Details</h1>
            <Container>
                <DinLeft />
                <DivRight />
                <DivImg>
                    <CardPokemon name={pokemonId.name} />
                </DivImg>
                <MainDetails>
                    <TypesOl>
                        <TypesDiv>
                            <h2>Types</h2>
                            <div>
                                {pokemonId.types.map((types, index) => (
                                    <TypeH3 className={types.type.name} key={index}>{types.type.name}</TypeH3>
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
                                    <h3>{ability.name}</h3>
                                    <p>{ability.flavor_text}</p>
                                </div>
                            ))}
                        </AbilitiesSub>
                    </AbilitiesInfo>
                </MainDetails>
            </Container>
            <Link to={'/'}>Back to Home</Link>
        </Section>
    );
};
