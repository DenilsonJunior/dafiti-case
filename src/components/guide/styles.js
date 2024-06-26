import styled from "styled-components"

export const SecGuide = styled.section`
    margin: 1rem 0 5rem;

    display: grid;
    gap: 1rem;
    grid-template-areas: 
        "a a c c"
        "b b c c";

    @media (max-width: 728px) {
        grid-template-areas: 
            "a a"
            "b b"
            "c c";
    }

    .card {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .boxText {
            backdrop-filter: blur(2px);
            transform: translateY(5rem);
            background-color: #0009;
            position: absolute;
            bottom: 0;
            padding: .5rem;
            transition-duration: .4s;
            width: 100%;
            p {
                color: white;
            }
            .tm {
                font-size: .7rem;
            }
        }
        &:hover {
            .boxText {
                transform: translate(0);
            }
        }
    }

    .card1 {
        grid-area: a;
    }
    .card2 {
        grid-area: b;
    }
    .card3 {
        grid-area: c;
    }
`