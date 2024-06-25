import styled from "styled-components"

export const Slide = styled.section`
    margin-top: 3rem;

    .swiper {
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .swiper {
        margin-left: auto;
        margin-right: auto;
    }
`