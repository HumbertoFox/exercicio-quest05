import styled from "styled-components";

const Section = styled.section`

button {
    display: block;
    font-size: 15px;
    font-weight: bold;
    color: #0202F5;
    padding: 10px;
    margin: 0 auto;
    transition: .3s ease-in-out;
}
button:hover {
    text-shadow: 0 0 2px #F5F502;
    transform: scale(1.1);
}
`;

const DivForm = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

form {
    display: flex;
    align-items: center;
    gap: 10px;
}
svg {
    margin-right: -32px;
}
input[type=search] {
    width: 270px;
    padding: 0 10px 0 26px;
    border: 1px solid;
    border-color: #999 #000 #000 #999;
    border-radius: 5px;
}
input[type=submit] {
    width: 100px;
    color: #FFF;
    background-color: #F50002;
    border-radius: 5px;
    border: 1px solid;
    border-color: #999 #000 #000 #999;
}
input[type=submit]:active {
    border-color: #000 #999 #999 #000;
}
input[type=search],
input[type=submit],
select {
    height: 35px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
}
select {
    width: 100px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid;
    border-color: #999 #000 #000 #999;
}
`;

const UlList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

li {
    width: 230px;
    height: 230px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid #000;
    overflow: hidden;
}
li::after {
    content: "";
    width: 150%;
    height: 55%;
    top: 0;
    position: absolute;
    background-color: #F50002;
    border-bottom: 4px solid #000;
    border-radius: 50%;
    transition: .4s ease-in-out;
}
li::before {
    content: "";
    width: 150%;
    height: 53%;
    bottom: 0;
    position: absolute;
    background-color: #FFF;
    border-top: 4px solid #000;
    transition: .4s ease-in-out;
}
li:hover::after {
    transform: translateY(-100%);
}
li:hover::before {
    transform: translateY(100%);
}
li:hover h2::after {
    content: none;
}

a {
    position: relative;
    display: flex;
}
a:hover img:nth-child(1) {
    opacity: 0;
}
a:hover img:nth-child(2) {
    opacity: 1;
}

img:nth-child(1) {
    transform: scalex(-1);
    transition: .5s ease-in-out;
    z-index: -1;
}
img:nth-child(2) {
    position: absolute;
    transition: .5s ease-in-out;
    opacity: 0;
}

h2 {
    position: absolute;
    top: 20px;
    font-size: 16px;
}
h2::after {
    width: 20px;
    height: 20px;
    position: absolute;
    content: "";
    top: 105px;
	left: 50%;
	transform: translate(-50%, -50%);
    background-color: #FFF;
    border: 15px solid #000;
    border-radius: 50%;
    z-index: 1;
}
`;

export { Section, DivForm, UlList };