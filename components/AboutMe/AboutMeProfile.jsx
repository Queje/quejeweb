import styles from '../AboutMe/AboutMeProfile.module.css'
import { Col } from 'react-bootstrap'
import Image from 'next/image'
import profile from '../../assets/AboutMe/profile2gs.webp'

export default function AboutMeProfile() {

    return(
        <>
            <Col lg={3} xs={12} className={styles.imageprofile}>
                <div className={styles.profilewrapper}>
                    <Image
                        src= { profile } // Route of the image file
                        layout="responsive"
                        height={ 300 } // Desired size with correct aspect ratio
                        width={ 300 } // Desired size with correct aspect ratio
                        className={styles.profilepicture}
                        alt= "Jérémy Querné, Développeur web fullstack"
                        placeholder="blur"
                    />
                    <div className={styles.profileoverlay}></div>
                </div>
            </Col>
        </>
    )
}