import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SecGuide } from './styles.js';

function Guide() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let startValue = "0% 80%";
        let endValue = "70% 90%";

        if (window.innerWidth <= 765) {
            // startValue = "15% 60%";
            // endValue = "60% 80%";
        }

        gsap.to(".card1, .card2, .card3", {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1000,
            scrollTrigger: {
                trigger: ".secAnima",
                scrub: true,
                start: startValue, // Quando o topo do elemento atinge o centro da viewport
                end: endValue, // Quando o fundo do elemento atinge o centro da viewport
                // markers: true // Adiciona marcadores para depuração
            }
        });

        return () => {
            // Mata todos os ScrollTriggers
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            // Mata todas as animações gsap
            gsap.killTweensOf("card1, .card2, .card3");
        }
    }, []);

    return (
        <div className='min-conteudo secAnima'>
            <SecGuide>
                <div className='card card1'>
                    <img className='img' src="./assets/img/img1.jpg" alt="" />
                    <div className='boxText'>
                        <p className='tl'>Fila</p>
                        <p className='tm'>Desde 1911, a FILA oferece peças exclusivas para performance esportiva e looks casuais, destacando sua herança esportiva e DNA italiano.</p>
                    </div>
                </div>
                <div className='card card2'>
                    <img className='img' src="./assets/img/img2.jpg" alt="" />
                    <div className='boxText'>
                        <p className='tl'>Kappa</p>
                        <p className='tm'>A Kappa, fundada em 1967, é uma marca italiana de roupas esportivas conhecida pelo logotipo icônico e por combinar estilo e funcionalidade em seus produtos.</p>
                    </div>
                </div>
                <div className='card card3'>
                    <img className='img' src="./assets/img/img3.jpg" alt="" />
                    <div className='boxText'>
                        <p className='tl'>Converse</p>
                        <p className='tm'>A Converse, fundada em 1908, é uma marca americana de calçados e roupas, famosa pelos tênis All Star, que combinam estilo clássico e moderno.</p>
                    </div>
                </div>
            </SecGuide>
        </div>
    )
}

export default Guide