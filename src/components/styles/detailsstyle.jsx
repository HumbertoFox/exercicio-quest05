import styled, { css } from "styled-components";

const Section = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    transition: .4s ease-in-out;

    h1 {
        font-size: 16px;
    }

    h2 {
        font-size: 15px;
    }

    a:nth-child(3) {
        font-size: 15px;
        font-weight: bold;
        margin-top: 15px;
        transition: .4s ease-in-out;
    }
    ${({ className }) => {
        if (className === "#FFF") {
            return css`
                a:nth-child(3) {
                    color: #FFF;
                }
            `;
        } else {
            return css`
                a:nth-child(3) {
                    color: #0202F5;
                }
            `;
        };
    }};
    a:nth-child(3):hover {
        text-shadow: 0 0 2px #F5F502;
        transform: scale(1.1);
    }
`;

const Container = styled.div`
    width: 570px;
    display: flex;
    gap: 10px;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid #999;
    border-radius: 0 20px;
    box-shadow: 10px 10px 10px #999;

    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: #999;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #666;
    }

    @media(max-width: 620px) {
        max-width: 350px;
        flex-direction: column;
    }
`;

const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 5px 15px;
    border: 1px solid #999;
    border-radius: 0 15px;

    a {
        display: flex;
        cursor: default;
    }
    img:first-child {
        display: none;
    }
    img:last-child {
        display: block;
    }
`;

const MainDetails = styled.div`
    width: 100%;
    display: flex;
    padding: 5px;
    gap: 5px;
    border: 1px solid #999;
    border-radius: 0 15px;

    @media(max-width: 620px) {
        flex-direction: column;
        align-items: center;
    }
`;

const TypesOl = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const TypesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    div {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
    h3 {
        font-size: 13px;
        font-weight: 400;
        text-transform: capitalize;
        padding: 5px 10px;
        border: 1px solid #999;
        border-radius: 0 5px;
    }

`;

const DivOl = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    ol {
        width: 180px;
        height: 65px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        overflow-y: auto;
        padding: 10px 0 10px 30px;
    }
    li {
        text-align: start;
        font-size: 12px;
        font-weight: 400;
        text-transform: capitalize;
    }
`;

const AbilitiesInfo = styled.div`
    max-height: 310px;
    display: flex;
    flex-direction: column;
`;

const AbilitiesSub = styled.div`
    height: 100%;
    overflow-y: auto;
    padding-left: 5px;
    border-left: 1px solid #999;

    div {
        display: flex;
        flex-direction: column;
    }
    h3 {
        font-size: 14px;
        text-transform: capitalize;
        padding: 10px 0 5px 0;
    }
    p {
        font-size: 12px;
    }

    @media(max-width: 620px) {
        border-left: 0;
    }
`;

export { Section, Container, DivImg, MainDetails, TypesOl, TypesDiv, DivOl, AbilitiesInfo, AbilitiesSub };