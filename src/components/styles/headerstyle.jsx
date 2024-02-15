import styled, { css } from "styled-components";

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
`;

const SpanToggle = styled.span`
    transition: .3s ease-in-out;
    ${({ className }) => {
        if (className.color === "#FFF") {
            return css`
                    width: 18px;
                    height: 18px;
                    left: 21px;
                    position: absolute;
                    background-color: #FFF;
                    border-radius: 50%;
                `;
        } else {
            return css`
                    width: 18px;
                    height: 18px;
                    left: 1px;
                    position: absolute;
                    background-color: #000;
                    border-radius: 50%;
                `;
        }
    }}
`;

export { Header, ImgPoKeMoN, ImgPokeDex, BtnToggle, SpanToggle };