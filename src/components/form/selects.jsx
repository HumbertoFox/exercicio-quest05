import {
    useEffect,
    useState
} from "react";
import { urlApiFetch, urlApiFetchType, urlApiFetchTypeSelected } from "../../services/services";

export const SelectType = ({ pokeTypeSelectedList }) => {

    const [typeList, setTypeList] = useState(null);
    const [typeSelectedList, setTypeSelectedList] = useState(typeList);

    const selectTypeList = async (typeSelected) => {
        if (typeSelected !== "All Types") {
            const response = await urlApiFetchTypeSelected(typeSelected);
            return setTypeSelectedList(response);
        } else {
            const urlFetchList = await urlApiFetch();
            const response = await urlFetchList.results;
            setTypeSelectedList(response);
        };
    };

    useEffect(() => {
        const fecthData = async () => {
            try {
                const typeData = await urlApiFetchType();
                setTypeList(typeData);
                pokeTypeSelectedList(typeSelectedList);
            } catch (error) {
                console.error("Error fetching data:", error);
            };
        };
        fecthData();
    }, [typeSelectedList]);

    if (typeList === null) {
        return (
            <option>{" "}</option>
        );
    };

    return (
        <select onChange={typeSelected => selectTypeList(typeSelected.target.value)}>
            <option>All Types</option>
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