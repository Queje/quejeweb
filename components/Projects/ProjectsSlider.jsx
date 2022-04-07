import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Virtual, Lazy } from 'swiper'
import image1 from '../../assets/Projects/nicoangercoaching2gs.webp'
import image1a from '../../assets/Modal/nicoangercoaching2.webp'
import image1b from '../../assets/Modal/nicoangercoaching3.webp'
import image1c from '../../assets/Modal/nicoangercoaching4.webp'
import image1d from '../../assets/Modal/nicoangercoaching5.webp'
import image2 from '../../assets/Projects/bretonbreaks2gs.webp'
import image2a from '../../assets/Modal/bretonbreaks2.webp'
import image2b from '../../assets/Modal/bretonbreaks3.webp'
import image3 from '../../assets/Projects/laurencepoidatz2gs.webp'
import image3a from '../../assets/Modal/laurencepoidatz2.webp'
import image4 from '../../assets/Modal/salonartcarantec1.webp'
import image4a from '../../assets/Modal/salonartcarantec2.webp'
import image4b from '../../assets/Modal/salonartcarantec3.webp'
import image5 from '../../assets/Projects/learningstuff2gs.webp'
import image5a from '../../assets/Modal/learningstuff2.webp'
import image5b from '../../assets/Modal/learningstuff3.webp' 
import image5c from '../../assets/Modal/learningstuff4.webp'
import image5d from '../../assets/Modal/learningstuff5.webp'
import image5e from '../../assets/Modal/learningstuff6.webp'
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
import { FaMailchimp } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'

export default function ProjectsSlider () {

    const { t } = useTranslation('common');

    const ProjectsList = [
                {
                    id: 1,
                    imagelist:[
                        {
                            id: 1,
                            imageitem: image1,
                        },
                        {
                            id: 2,
                            imageitem: image1a,
                        },
                        {
                            id: 3,
                            imageitem: image1b,
                        },
                        {
                            id: 4,
                            imageitem: image1c,
                        },
                        {
                            id: 5,
                            imageitem: image1d,
                        }],
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
                            name: FaCss3Alt,
                        },
                        {
                            id: 3,
                            tooltip: "Mailchimp",
                            name: FaMailchimp,
                        }
                    ]
                },
                {
                    id: 2,
                    imagelist:[
                        {
                            id: 1,
                            imageitem: image2,
                        },
                        {
                            id: 2,
                            imageitem: image2a,
                        },
                        {
                            id: 3,
                            imageitem: image2b,
                        }],
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
                    imagelist:[
                        {
                            id: 1,
                            imageitem: image3
                        },
                        {
                            id: 2,
                            imageitem: image3a
                        }],
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
                    imagelist: [
                        {
                            id: 1,
                            imageitem: image4,
                        },
                        {
                            id: 2,
                            imageitem: image4a,
                        },
                        {
                            id: 3,
                            imageitem: image4b,
                        }],
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
                    imagelist:[
                        {
                            id: 1,
                            imageitem: image5,
                        },
                        {
                            id: 2,
                            imageitem: image5a,
                        },
                        {
                            id: 3,
                            imageitem: image5b,
                        },
                        {
                            id: 4,
                            imageitem: image5c,
                        },
                        {
                            id: 5,
                            imageitem: image5d,
                        },
                        {
                            id: 6,
                            imageitem: image5e,
                        }],
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
                625: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                1400:{
                    slidesPerView: 3,
                    spaceBetween: 5,
                }
            }}
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