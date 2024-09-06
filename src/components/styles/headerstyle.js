import styled, { css } from "styled-components";

const Header = styled.header`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    transition: .4s ease-in-out;
`;

const ImgPoKeMoN = styled.img`
    width: 100px;

    @media(max-width: 420px) {
        width: 75px;
    }
`;

const ImgPokeDex = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
	transform: translate(-50%, -50%);
    width: 200px;

    @media(max-width: 420px) {
        width: 150px;
    }
`;

const BtnToggle = styled.div`
    width: 40px;
    height: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    background-color: #F50202;
    padding: 1px;
    border-radius: 25px;
    cursor: pointer;

    svg {
        width: 16px;
    }

    @media(max-width: 420px) {
        margin: auto 0;
    }
`;

const SpanToggle = styled.span`
    width: 18px;
    height: 18px;
    position: absolute;
    border-radius: 50%;
    transition: .4s ease-in-out;

    ${({ className }) => {
        if (className.color === "#FFF") {
            return css`
                left: 21px;
                background-color: #FFF;
            `;
        } else {
            return css`
                left: 1px;
                background-color: #000;
            `;
        };
    }};
`;

export { Header, ImgPoKeMoN, ImgPokeDex, BtnToggle, SpanToggle };