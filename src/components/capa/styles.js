import styled from "styled-components"

export const Image = styled.section`
    position: relative;
    img {
        width: 100%;
    }
    a {
        position: absolute;
        width: 9.6%;
        height: auto;
        bottom: 35.3%;
        right: 21.9%;
        z-index: 1;
        height: auto;
        text-decoration: none;
        transition-duration: .3s;
        display: flex;
        align-items: flex-start;
        @media (max-width: 768px) {
            width: 17.5%;
            bottom: 44.5%;
            right: 6.7%;
        }
        &:hover {
            transform: scale(1.05);
            .imgBtn {
                filter: drop-shadow(.1rem .1rem .3rem #0004);
            }
        }
        .imgBtn {
            width: 100%;
            transition-duration: .3s;
        }
        .detal {
            position: absolute;
            color: black;
            width: 5%;
            height: 100%;
            /* background-color: red; */
            object-fit: contain;
            top: 0%;
            right: 25%;
            animation: arrow 1s infinite;
            @media (max-width: 768px) {
                width: 4.5%;
            }
        }
        @keyframes arrow {
            0% {
            }
            100% {
                transform: translateX(.3rem);
            }
        }
    }
`
