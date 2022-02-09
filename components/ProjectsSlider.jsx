import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'
import image1 from '../public/images/nicocoaching.webp'
import image2 from '../public/images/bretonbreaks.webp'
import image3 from '../public/images/laurencepoidatz.webp'
import image4 from '../public/images/salonartcarantec.webp'
import image5 from '../public/images/learningstuff.webp'
import styles from '../styles/Home.module.css'
import { useState } from "react"
import ProjectsModal from './ProjectsModal'
import { FaCss3Alt } from 'react-icons/fa'
import { FaWordpressSimple } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'

export default function ProjectsSlider () {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ProjectsList = {
        project1 :
            {
                title: "nicoangercoaching.fr",
                imagesource: image1,
                alt: "image du site https://nicoangercoaching.fr",
                work: "site pour un préparateur Mentale et Coach sportif",
                details: "Construit sur Wordpress, ce travail contient une partie blog avec des articles et une inscription à une mailing list pour une news letter en utilisant MailChimp. Customisation d'un thème par le CSS.",
                iconlist:{
                    icon1: <FaWordpressSimple/>,
                    icon2:  <FaCss3Alt/>,
                },
            },
        project2 :
            {
                title: "www.bretonbreaks.com",
                imagesource: image2,
                alt: "image du site https://www.bretonbreaks.com",
                work: "site pour la location d'une maison de vacances",
                details: "Site vitrine en frontend réalisé avec Reactjs et Bootstrap, hébergé par Vercel. Site responsive (adapté pour les mobiles) fait en css customisé.",
                iconlist:{
                    icon1: <FaReact/>,
                    icon2:  <SiJavascript/>,
                    icon3: <FaBootstrap/>,
                    icon4: <FaCss3Alt/>,
                    icon5: <SiVercel/>
                },
            },
        project3 : 
            {

            },
        project4 :
            {

            },
        project5 :
            {

            }
    }
    
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
                    onClick={handleShow}
                />
                <ProjectsModal 
                    show={show} 
                    handleClose={handleClose} 
                    title={ProjectsList.project1.title}
                    work={ProjectsList.project1.work}
                    details={ProjectsList.project1.details}
                    icon1={ProjectsList.project1.icon1}
                    icon2={ProjectsList.project1.icon2}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image2}
                    alt="image du site https://www.bretonbreaks.com" 
                    onClick={handleShow}
                />
                < ProjectsModal show={show} handleClose={handleClose}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image3}
                    alt="image du site https://www.laurencepoidatz.com" 
                    onClick={handleShow}
                />
                < ProjectsModal show={show} handleClose={handleClose}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image4}
                    alt="image du site https://www.salonartcarantec.com" 
                    onClick={handleShow}
                />
                < ProjectsModal show={show} handleClose={handleClose}/>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className={styles.SliderItem}
                    src={image5}
                    alt="image du site https://learning-stuff-thp.herokuapp.com/" 
                    onClick={handleShow}
                />
                < ProjectsModal show={show} handleClose={handleClose}/>
            </SwiperSlide>
    </Swiper>
    )
}