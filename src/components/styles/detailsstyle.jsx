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

.div-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin-right: 100px;
}
.link-details {
    display: flex;
    flex-direction: column-reverse;
    gap: 25px;
    cursor: default;
}
.front,
.back {
    display: block;
    margin: 0 auto;
}
.back {
    transform: scaleX(-1);
}
.div-types-ol {
    display: flex;
}
.div-types {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}
.div-h3 {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}
.h3-types {
    font-size: 16px;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 5px;
}

.h2-ol,
.h2-div,
.h2-types {
    font-size: 18px;
}
.div-ol {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.ol-moves {
    width: 250px;
    height: 50px;
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
    margin: 100px 0 30px 0;
    transition: .3s ease-in-out;
}
.link-home:hover {
    text-shadow: 0 0 2px #0202F5;
    transform: scale(1.1);
}
`;