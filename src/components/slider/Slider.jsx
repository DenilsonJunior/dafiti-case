import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Slide } from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import projetoData from './item.json';
import Item from './Item.jsx';

function Slider() {
    const [slideView, setSlideView] = useState(1);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 480) {
                setSlideView(4);
            } else if (window.innerWidth < 1080) {
                setSlideView(7);
            } else {
                setSlideView(9);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Slide>
            <div className='min-conteudo'>
                <Swiper
                    modules={[Navigation, Autoplay, Scrollbar, A11y]}
                    slidesPerView={slideView}
                    spaceBetween={5}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    className="mySwiper"
                >
                    {projetoData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Item
                                image={item.image}
                                alt={item.alt}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </Slide>
    );
}

export default Slider;
