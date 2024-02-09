import styled from "styled-components";

export const Header = styled.header`
position: relative;
display: flex;
justify-content: space-between;
padding: 10px;

img {
    width: 100px;
}
h1 {
    position: absolute;
    top: 30px;
    left: 50%;
    font-family: 'Pokemon Solid', sans-serif;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    cursor: default;
}
`;