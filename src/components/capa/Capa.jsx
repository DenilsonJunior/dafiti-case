import React, { useState, useEffect } from 'react';
import { Image } from './styles.js';

function Capa() {
    const [image, setImage] = useState('capa-desk');

    useEffect(() => {
        const updateImage = () => {
            if (window.innerWidth < 758) {
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
            </Image>
        </div>
    );
}

export default Capa;
