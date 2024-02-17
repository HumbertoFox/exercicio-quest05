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
        color: #0202F5;
        margin-top: 15px;
        transition: .3s ease-in-out;
    }
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
    border: 6px solid;
    border-color: #999 #000 #000 #999;
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
`;

const DivImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 0 15px;
    border: 3px solid;
    border-color: #999 #000 #000 #999;
    border-radius: 0 15px 0 15px;
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
    padding: 5px;
    border: 3px solid;
    border-color: #999 #000 #000 #999;
`;

const TypesOl = styled.div`
    display: flex;
`;

const TypesDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

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
        border: 2px solid;
        border-color: #999 #000 #000 #999;
        border-radius: 5px;
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
        margin: 10px 0;
        border: 2px solid;
        border-color: #999 #000 #000 #999;
    }
    li {
        text-align: start;
        font-size: 12px;
        font-weight: 400;
        text-transform: capitalize;
    }
`;

const AbilitiesInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const AbilitiesSub = styled.div`
    max-height: 130px;
    overflow-y: auto;
    padding-left: 5px;
    border: 2px solid;
    border-color: #999 #000 #000 #999;

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
`;

export { Section, Container, DivImg, MainDetails, TypesOl, TypesDiv, DivOl, AbilitiesInfo, AbilitiesSub };