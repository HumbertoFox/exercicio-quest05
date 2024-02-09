import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;

.div-info {
    max-width: 70%;
    display: flex;
    align-items: center;
    margin-top: 30px;
}

.div-img-name {
    margin-right: 100px;
}
.h2-ol,
.h2-div {
    font-size: 18px;
}
.div-ol {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px 0;
}
.ol-moves {
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 40px;
    overflow-y: auto;
    padding-left: 40px;
    margin-top: 10px;
}
.li-moves {
    width: 100px;
    text-align: start;
    font-weight: 400;
}

.div-abilities-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.div-abilities {
    margin-top: 10px;
}
.h3-abilit {
    text-align: center;
    font-size: 15px;
}

.link-home {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin-top: 100px;
    transition: .3s ease-in-out;
}
.link-home:hover {
    text-shadow: 0 0 2px #0202F5;
    transform: scale(1.1);
}
`;