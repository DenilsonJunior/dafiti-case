import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { SecGuide } from './styles.js';
import cardData from './item.json';

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
                {cardData.map((item, index) => (
                    <div className={`card ${item.class}`} key={`card${index}`}>
                        <img className='img' src={`./assets/img/${item.image}`} alt="" />
                        <div className='boxText'>
                            <p className='tl'>{item.title}</p>
                            <p className='tm'>{item.text}</p>
                        </div>
                    </div>
                ))}
            </SecGuide>
        </div>
    )
}

export default Guide