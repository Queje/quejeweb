import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Virtual, Lazy } from 'swiper'
import image1 from '../../assets/Projects/nicoangercoaching2gs.webp'
import image2 from '../../assets/Projects/bretonbreaks2gs.webp'
import image3 from '../../assets/Projects/laurencepoidatz2gs.webp'
import image4 from '../../assets/Projects/salonartcarantec2gs.webp'
import image5 from '../../assets/Projects/learningstuff2gs.webp'
import ProjectsModal from '../Projects/ProjectsModal'
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
                    background: image1,
                    title: "nicoangercoaching.fr",
                    url: "https://nicoangercoaching.fr/",
                    imagesource: image1,
                    alt: "image du site https://nicoangercoaching.fr",
                    work: "Site pour un préparateur Mental et Coach sportif.",
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
                    background: image2,
                    title: "breton breaks",
                    url: "https://www.bretonbreaks.com",
                    imagesource: image2,
                    alt: "image du site https://www.bretonbreaks.com",
                    work: "Site pour la location d'une maison de vacances",
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
                    background: image3,
                    title: "laurence poidatz",
                    url: "https://www.laurencepoidatz.com",
                    imagesource: image3,
                    alt: "image du site https://www.laurencepoidatz.com",
                    work: "Site vitrine de l'artiste peintre Laurence Poidatz",
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
                    background: image4,
                    title: "salon des arts de Carantec",
                    url: "https://www.salonartcarantec.com",
                    imagesource: image4,
                    alt: "image du site https://www.salonartcarantec.com",
                    work: "Site pour l'association du salon des arts de Carantec.",
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
                    background: image5,
                    title: "learning-stuff",
                    url: "https://learning-stuff-thp.herokuapp.com/",
                    imagesource: image5,
                    alt: "image du site https://learning-stuff-thp.herokuapp.com/",
                    work: "Site démo pour de la vente et de l'apprentissage en ligne.",
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
            spaceBetween={5}
            slidesPerView={1}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                }}}
            modules={[Pagination, Virtual, Lazy]}
            pagination={{clickable: true}}
            virtual
            lazy
        >
        { ProjectsList.map((project) => (
            <SwiperSlide
                key={project.id}
                virtualIndex={project.id}
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