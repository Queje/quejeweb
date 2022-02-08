import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import image1 from '../public/images/nicocoaching.webp'
import image2 from '../public/images/bretonbreaks.webp'
import image3 from '../public/images/laurencepoidatz.webp'
import image4 from '../public/images/salonartcarantec.webp'
import image5 from '../public/images/learningstuff.webp'
import styles from '../styles/Home.module.css'

export default function ProjectsSlider () {
    
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation]}
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className={styles.MySlider}
        >
            <SwiperSlide
                className={styles.SwipeSlider}
            >
                <Image
                    className={styles.SliderItem}
                    src={image1}
                    alt="image du site https://nicoangercoaching.fr" 
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image2}
                    alt="image du site https://www.bretonbreaks.com" 
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image3}
                    alt="image du site https://www.laurencepoidatz.com" 
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image4}
                    alt="image du site https://www.salonartcarantec.com" 
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image5}
                    alt="image du site https://learning-stuff-thp.herokuapp.com/" 
                />
            </SwiperSlide>
    </Swiper>
    )
}