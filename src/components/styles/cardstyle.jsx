import styled from "styled-components";

export const Div = styled.div`
.div-card {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

a {
    position: relative;
    display: flex;
}
a:hover .front {
    opacity: 1;
    transform: scale(1.1);
}
a:hover .back {
    opacity: 0;
}

.front {
    position: absolute;
    opacity: 0;
}
.back {
    z-index: -1;
}
.back,
.front {
    transition: .5s ease-in-out;
}
`;