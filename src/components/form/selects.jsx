import { useEffect, useState } from "react";
import { urlApiFetchType, urlApiFetchTypeSelected } from "../../services/services";

export const SelectType = ({ pokeTypeSelectedList }) => {

    const [typeList, setTypeList] = useState(null);
    const [typeSelectedList, setTypeSelectedList] = useState(typeList)

    const pokemonTypeList = async () => {
        const response = await urlApiFetchType().then(response => response.results);
        setTypeList(response.filter(type => type.name !== "unknown" && type.name !== "shadow"));
    };

    const selectTypeList = async (typeSelected) => {
        await urlApiFetchTypeSelected(typeSelected)
            .then(response => setTypeSelectedList(response.pokemon.map(pokemonType => pokemonType.pokemon)));
    };

    useEffect(() => {
        pokemonTypeList();
        pokeTypeSelectedList(typeSelectedList)
    }, [typeSelectedList]);

    if (typeList === null) {
        return (
            <option>{" "}</option>
        )
    };

    return (
        <select className="select-type" onChange={event => selectTypeList(event.target.value)}>
            <option>Todos</option>
            {
                typeList.map(resType => {
                    console.log();
                    return (
                        <option key={resType.name} value={resType.name}>{resType.name}</option>
                    )
                })
            };
        </select>

    );
};