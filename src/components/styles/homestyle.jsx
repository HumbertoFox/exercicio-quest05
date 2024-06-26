import styled, {
    css,
    keyframes
} from "styled-components";

const move = keyframes`
    0% {
        transform: rotate(5deg);
    }
    50% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(-5deg)
    }
`;

const Section = styled.section`
    width: 100%;
    height: 100%;
    transition: .4s ease-in-out;

    button {
        display: block;
        font-size: 15px;
        font-weight: bold;
        font-style: italic;
        padding: 15px 10px;
        margin: 0 auto;
        transition: .4s ease-in-out;
    }

    ${({ className }) => {
        if (className === "#FFF") {
            return css`
                button {
                    color: #FFF;
                } 
            `;
        } else {
            return css`
                button {
                    color: #0202F5;
                }
            `;
        };
    }};

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
        z-index: 1;
    }
    input[type=search] {
        width: 170px;
        padding: 0 10px 0 26px;
        border: 1px solid;
        border-radius: 5px;
    }
    input[type=submit] {
        width: 70px;
        color: #FFF;
        background-color: #F50002;
        border-radius: 5px;
        border: 1px solid;
    }
    input[type=submit]:active,
    input[type=search]:focus,
    select:focus {
        border-color: #000 #999 #999 #000;
    }
    input[type=search],
    input[type=submit],
    select {
        height: 35px;
        font-size: 14px;
        font-weight: bold;
        border-color: #999 #000 #000 #999;
        cursor: pointer;
        transition: .4s ease-in-out;
    }
    select {
        width: 90px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid;
    }
    input.required:focus {
        box-shadow: 0 0 5px #F50002;
    }
    input.required,
    input.required:focus {
        border: 1px solid #F50002;
        outline: none;
    }
    .required::placeholder {
        font-style: italic;
        color: #F50002;
    }
    ${({ className }) => {
        if (className === "#000") {
            return css`
                input[type=search],
                select {
                    color: #000;
                    background-color: #FFF;
                }
            `;
        } else {
            return css`
                input[type=search],
                select {
                    color: #FFF;
                    background-color: #333;
                }
            `;
        };
    }};
`;

const UlList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    li {
        width: 270px;
        height: 270px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;
        animation: ${move} .3s 2s linear infinite alternate;
    }
    li::before {
        content: "";
        width: 100%;
        height: 50%;
        bottom: 0;
        position: absolute;
        transition: .4s ease-in-out;
        z-index: 1;
    }
    li::after {
        content: "";
        width: 100%;
        height: 50%;
        top: 0;
        position: absolute;
        background-color: #F50002;
        transition: .4s ease-in-out;
        z-index: 1;
    }
    li:hover {
        animation: none;
    }
    li:hover::after {
        transform: translateY(-100%);
    }
    li:hover::before {
        transform: translateY(101%);
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
        width: 25px;
        height: 25px;
        position: absolute;
        content: "";
        top: 113px;
    	left: 50%;
    	transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: 2;
        transition: .4s ease-in-out;
    }
    ${({ className }) => {
        if (className === "#000") {
            return css`
                li {
                    border: 3px solid #000;
                }
                li::before {
                    background-color: #FFF;
                    border-top: 3px solid #000;
                }
                li::after {
                    border-bottom: 3px solid #000;
                }
                h2::after {
                    background-color: #FFF;
                    border: 20px solid #000;
                }
            `;
        } else {
            return css`
                li {
                    border: 3px solid #FFF;
                }
                li::before {
                    background-color: #000;
                    border-top: 3px solid #FFF;
                }
                li::after {
                    border-bottom: 3px solid #FFF;
                }
                h2::after {
                    background-color: #000;
                    border: 20px solid #FFF;
                }
            `;
        };
    }};
`;

export {
    Section,
    DivForm,
    UlList
};