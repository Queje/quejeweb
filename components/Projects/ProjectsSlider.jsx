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
import { useTranslation } from 'next-i18next'

export default function ProjectsSlider () {

    const { t } = useTranslation('common');

    const ProjectsList = [
                {
                    id: 1,
                    background: image1,
                    title: "nicoangercoaching.fr",
                    url: "https://nicoangercoaching.fr/",
                    imagesource: image1,
                    alt: "image du site https://nicoangercoaching.fr",
                    work: `${t('project1work')}`,
                    details: `${t('project1details')}`,
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
                    title: "Breton Breaks",
                    url: "https://www.bretonbreaks.com",
                    imagesource: image2,
                    alt: "image du site https://www.bretonbreaks.com",
                    work: `${t('project2work')}`,
                    details: `${t('project2details')}`,
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
                    title: "Laurence Poidatz",
                    url: "https://www.laurencepoidatz.com",
                    imagesource: image3,
                    alt: "image du site https://www.laurencepoidatz.com",
                    work: `${t('project3work')}`,
                    details: `${t('project3details')}`,
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
                    title: "Salon des arts de Carantec",
                    url: "https://www.salonartcarantec.com",
                    imagesource: image4,
                    alt: "image du site https://www.salonartcarantec.com",
                    work: `${t('project4work')}`,
                    details: `${t('project4details')}`,
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
                    title: "Learning-stuff",
                    url: "https://learning-stuff-thp.herokuapp.com/",
                    imagesource: image5,
                    alt: "image du site https://learning-stuff-thp.herokuapp.com/",
                    work: `${t('project5work')}`,
                    details: `${t('project5details')}`,
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