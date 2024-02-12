import styled from "styled-components";

const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

const ImgPoKeMoN = styled.img`
    width: 100px;
`;

const ImgPokeDex = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
	transform: translate(-50%, -50%);
    width: 200px;
`;

export { Header, ImgPoKeMoN, ImgPokeDex };