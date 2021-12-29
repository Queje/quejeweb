import { Carousel } from 'react-bootstrap'
import Image from 'next/image'
import image1 from '../public/images/nicocoaching.webp'
import image2 from '../public/images/bretonbreaks.webp'
import image3 from '../public/images/laurencepoidatz.webp'
import image4 from '../public/images/salonartcarantec.webp'
import image5 from '../public/images/learningstuff.webp'

export default function ProjectsCarousel () {

    return(
        <Carousel fade>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={image1}
                    alt="image du site https://nicoangercoaching.fr" 
                />
                <Carousel.Caption>
                    <h3>nicoangercoaching.fr</h3>
                    <p>site wordpress: préparateur mental & coaching sportif</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={image2}
                    alt="image du site https://www.bretonbreaks.com" 
                />
                <Carousel.Caption>
                    <h3>www.bretonbreaks.com</h3>
                    <p>site Reactjs: site vitrine pour location de vacances</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={image3}
                    alt="image du site https://www.laurencepoidatz.com" 
                />
                <Carousel.Caption>
                    <h3>www.laurencepoidatz.com</h3>
                    <p>retouche site Wix: artiste peintre</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={image4}
                    alt="image du site https://www.salonartcarantec.com" 
                />
                <Carousel.Caption>
                    <h3>www.salonartcarantec.com</h3>
                    <p>site Reactjs: site vitrine exposition de peinture et sculpture</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={image5}
                    alt="image du site https://learning-stuff-thp.herokuapp.com/" 
                />
                <Carousel.Caption>
                    <h3>Learning-stuff</h3>
                    <p>site démo Reactjs & Ruby on rails: site plateform pour apprendre en ligne</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}