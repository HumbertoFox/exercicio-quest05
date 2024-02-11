import styled from "styled-components";

export const Header = styled.header`
position: relative;
display: flex;
justify-content: space-between;
padding: 10px;

.img-pokemon {
    width: 100px;
}
.img-pokedex {
    position: absolute;
    top: 50%;
    left: 50%;
	transform: translate(-50%, -50%);
    width: 200px;
}
`;