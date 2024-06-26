import styled from "styled-components"

export const SecGuide = styled.section`
    margin: 1rem 0 5rem;
    @media (max-width: 728px) {
        margin: 1rem 0 2rem;
    }

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
        opacity: 0;
        @media (max-width: 786px) {
            opacity: 1 !important;
            transform: none !important;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .boxText {
            backdrop-filter: blur(2px);
            transform: translateY(10rem);
            background-color: rgba(0,0,0,.8);
            position: absolute;
            bottom: 0;
            padding: .5rem;
            transition-duration: .4s;
            width: 100%;
            p {
                color: white;
            }
            .tm {
                font-size: .8rem;
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
        transform: translateX(-30rem);
        opacity: 0;
    }
    .card2 {
        grid-area: b;
        transform: translateY(30rem);
        opacity: 0;
    }
    .card3 {
        grid-area: c;
        transform: translateX(30rem);
    }
`