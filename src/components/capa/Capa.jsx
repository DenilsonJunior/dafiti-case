import React, { useState, useEffect } from 'react';
import { Image } from './styles.js';

function Capa() {
    const [image, setImage] = useState('capa-desk');

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth < 768) {
                setImage('capa-resp');
            } else {
                setImage('capa-desk');
            }
        };

        updateImage();

        window.addEventListener('resize', updateImage);

        return () => window.removeEventListener('resize', updateImage);
    }, []);

    return (
        <div className='max-conteudo'>
            <Image>
                <img src={`./assets/img/${image}.jpg`} alt="" />
                <a href="https://www.dafiti.com.br/" target="_blank" rel="noopener noreferrer">
                    <img className='imgBtn' src="./assets/img/btn.png" alt="" />
                    <img className='detal' src="./assets/img/arrow.png" alt="" />
                </a>
            </Image>
        </div>
    );
}

export default Capa;
