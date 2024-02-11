import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;

.div-info {
    max-width: 45%;
    display: flex;
    gap: 50px;
    margin-top: 10px;
}

.h1-info {
    font-size: 16px;
}
.div-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
    gap: 5px;
}
.h3-types {
    font-size: 13px;
    font-weight: 400;
    text-transform: capitalize;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 5px;
}

h2 {
    font-size: 15px;
}
.div-ol {
    display: flex;
    flex-direction: column;
    text-align: center;
}
.ol-moves {
    width: 180px;
    height: 65px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: auto;
    padding: 10px 0 10px 40px;
    margin: 10px 0;
}
.li-moves {
    text-align: start;
    font-size: 12px;
    font-weight: 400;
    text-transform: capitalize;
}

.div-abilities-info {
    display: flex;
    flex-direction: column;
}
.div-abilities {
    max-height: 130px;
    overflow-y: auto;
}
.div-abilities-details {
    display: flex;
    flex-direction: column;
}
.h3-abilit {
    font-size: 14px;
    text-transform: capitalize;
    padding: 10px 0 5px 0;
}
.div-abilities p {
    font-size: 12px;
}

.link-home {
    font-size: 15px;
    font-weight: bold;
    color: #0202F5;
    margin-top: 15px;
    transition: .3s ease-in-out;
}
.link-home:hover {
    text-shadow: 0 0 2px #F5F502;
    transform: scale(1.1);
}
`;