import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import image1 from '../public/images/nicocoaching.webp'
import image2 from '../public/images/bretonbreaks.webp'
import image3 from '../public/images/laurencepoidatz.webp'
import image4 from '../public/images/salonartcarantec.webp'
import image5 from '../public/images/learningstuff.webp'
import styles from '../styles/Home.module.css'
import ProjectsModal from './ProjectsModal'
import { FaCss3Alt } from 'react-icons/fa'
import { FaWordpressSimple } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiVercel } from 'react-icons/si'
import { FaBootstrap } from 'react-icons/fa'
import { FaWix } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'
import { SiRubyonrails } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'

export default function ProjectsSlider () {

    const ProjectsList = [
                {
                    id: 1,
                    title: "nicoangercoaching.fr",
                    imagesource: image1,
                    alt: "image du site https://nicoangercoaching.fr",
                    work: "site pour un préparateur Mentale et Coach sportif",
                    details: "Construit sur Wordpress, ce travail contient une partie blog avec des articles et une inscription à une mailing list pour une news letter en utilisant MailChimp. Customisation d'un thème par le CSS.",
                    iconlist:[
                        {
                            id: 1,
                            tooltip: "Wordpress",
                            name: FaWordpressSimple,
                        },
                        {
                            id: 2,
                            tooltip: "css 3",
                            name: FaCss3Alt
                        }
                    ]
                },
                {
                    id: 2,
                    title: "www.bretonbreaks.com",
                    imagesource: image2,
                    alt: "image du site https://www.bretonbreaks.com",
                    work: "site pour la location d'une maison de vacances",
                    details: "Site vitrine en frontend réalisé avec Reactjs et Bootstrap, hébergé par Vercel. Site responsive (adapté pour les mobiles) fait en css customisé. Module de traduction français et anglais (i18next).",
                    iconlist:[
                        {
                            id: 1,
                            tooltip: "React",
                            name: FaReact, 
                        },
                        {
                            id: 2,
                            tooltip: "Javascript",
                            name: SiJavascript, 
                        },
                        {
                            id: 3,
                            tooltip: "Bootstrap",
                            name: FaBootstrap,
                        },
                        {
                            id: 4,
                            tooltip: "css 3",
                            name: FaCss3Alt,
                        },
                        {
                            id: 5,
                            tooltip: "Vercel",
                            name: SiVercel,
                        }
                    ],
                },
                {
                    id: 3,
                    title: "www.laurencepoidatz.com",
                    imagesource: image3,
                    alt: "image du site https://www.laurencepoidatz.com",
                    work: "site vitrine de l'artiste peintre Laurence Poidatz",
                    details: "Site vitrine retouché sur wix.com, et retravaillé pour être responsive.",
                    iconlist:[
                        {
                            id: 1,
                            tooltip: "Wix",
                            name: FaWix, 
                        }
                    ]
                },
                {
                    id: 4,
                    title: "www.salonartcarantec.com",
                    imagesource: image4,
                    alt: "image du site https://www.salonartcarantec.com",
                    work: "site pour l'association du salon des arts de Carantec.",
                    details: "Site vitrine en frontend réalisé avec Reactjs et Bootstrap, hébergé par Vercel. Site responsive (adapté pour les mobiles) fait en css customisé. Creation de formulaire imprimable en pdf sans sauvegarde des données (react-to-print). Module de traduction français et anglais (i18next). Customisation par CSS pour rendre le site responsive.",
                    iconlist:[
                        {
                            id: 1,
                            tooltip: "React",
                            name: FaReact,
                        },
                        {
                            id: 2,
                            tooltip: "Javascript",
                            name: SiJavascript,
                        },
                        {
                            id: 3,
                            tooltip: "Bootstrap",
                            name: FaBootstrap,
                        },
                        {
                            id: 4,
                            tooltip: "css 3",
                            name: FaCss3Alt,
                        },
                        {
                            id: 5,
                            tooltip: "Vercel",
                            name: SiVercel,
                        }
                    ]
                },
                {
                    id: 5,
                    title: "learning-stuff",
                    imagesource: image5,
                    alt: "image du site https://learning-stuff-thp.herokuapp.com/",
                    work: "site démo pour de la vente et de l'apprentissage en ligne.",
                    details: "Site e-commerce avec le frontend réalisé avec Reactjs et Bootstrap, le backend est une api réalisé en Ruby On Rails et une base de données en postgreSQL. Ce Site est hébergé sur Heroku. Site responsive (adapté pour les mobiles) fait en css customisé. Système authentifaction avec Devise, partie administrateur avec gestion des utilisateurs. 2 types d'utilisateurs, les étudiants et les professeurs. Achats des leçons avec Stripe.",
                    iconlist:[
                        {
                            id: 1,
                            tooltip: "React",
                            name: FaReact,
                        },
                        {
                            id: 2,
                            tooltip: "Javascript",
                            name: SiJavascript,
                        },
                        {
                            id: 3,
                            tooltip: "Bootstrap",
                            name: FaBootstrap,
                        },
                        {
                            id: 4,
                            tooltip: "css 3",
                            name: FaCss3Alt, 
                        },
                        {
                            id: 5,
                            tooltip: "Ruby",
                            name: DiRuby,    
                        },
                        {
                            id: 6,
                            tooltip: "Ruby On Rails",
                            name: SiRubyonrails, 
                        },
                        {
                            id: 7,
                            tooltip: "PostgreSQL",
                            name: SiPostgresql, 
                        },
                        {
                            id: 8,
                            tooltip: "Heroku",
                            name: SiHeroku 
                        }
                    ]
                }]
    
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
        { ProjectsList.map((project) => (
            <SwiperSlide
                className={styles.SwipeSlider}
                key={project.id}
            >
                <ProjectsModal 
                    key={project.id}
                    project={project}
                />
            </SwiperSlide>
        ))}  
    </Swiper>
    )
}