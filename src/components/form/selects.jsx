import { useEffect, useState } from "react";
import { urlApiFetchType, urlApiFetchTypeSelected } from "../../services/services";

export const SelectType = ({ pokeTypeSelectedList }) => {

    const [typeList, setTypeList] = useState(null);
    const [typeSelectedList, setTypeSelectedList] = useState(typeList)

    const pokemonTypeList = async () => {
        const resTypes = await urlApiFetchType().then(response => response.results);
        const response = resTypes.filter(type => type.name !== "unknown" && type.name !== "shadow");
        return setTypeList(response);
    };

    const selectTypeList = async (typeSelected) => {
        const response = await urlApiFetchTypeSelected(typeSelected)
            .then(response => response.pokemon.map(pokemonType => pokemonType.pokemon));
        return setTypeSelectedList(response);
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
            <option value={""}>All Types</option>
            {
                typeList.map(resType => {
                    return (
                        <option key={resType.name} value={resType.name}>{resType.name}</option>
                    )
                })
            };
        </select>

    );
};