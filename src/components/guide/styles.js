import styled from "styled-components"

export const SecGuide = styled.section`
    margin: 1rem 0;

    display: grid;
    gap: 1rem;
    grid-template-areas: 
        "a a c c"
        "b b c c";

    @media (max-width: 768px) {
        grid-template-areas: 
            "a a"
            "b b"
            "c c";
    }

    .img {
        width: 100%;
    }

    .img1 {
        grid-area: a;
    }
    .img2 {
        grid-area: b;
    }
    .img3 {
        grid-area: c;
    }
`