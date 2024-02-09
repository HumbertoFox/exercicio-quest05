import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

.div-info {
    max-width: 70%;
    display: flex;
    align-items: center;
    margin-top: 30px;
}
.div-img-name {
    margin-right: 100px;
}
.div-ol {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 10px;
}
.ol-moves {
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 30px;
    overflow-y: auto;
    padding-left: 30px;
    margin-top: 10px;
}

.div-abilities-info {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.div-abilities {
    margin-top: 10px;
}

.link-home {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-top: 100px;
    transition: .3s ease-in-out;
}
.link-home:hover {
    text-shadow: 0 0 2px #0202F5;
}
`;