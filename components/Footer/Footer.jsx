import styles from '../Footer/Footer.module.css'
import { Col, Row } from 'react-bootstrap'
import { BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Footer () {

    return(
        <footer className={styles.footer}>
            <Row className="d-flex justify-content-evenly ml-5">
                <Col md={2} xs={12} className={styles.link}>
                    <a href="callto:+0678866781">
                        <BsFillPhoneFill size={36} className={styles.icons} id="shakeanimation"/>
                        0678866781
                    </a>
                </Col>
                <Col md={2} xs={12} className={styles.link}>
                    <a href="mailto:jeremy.querne@gmail.com">
                        <GrMail size={36} className={styles.icons} id="shakeanimation"/>
                        email
                    </a>
                </Col>
                <Col md={2} xs={12} className={styles.link}>
                    <a href="https://github.com/Queje" target="_blank" rel="noopener noreferrer" >
                        <BsGithub size={36} className={styles.icons} id="shakeanimation"/>
                        Github
                    </a>
                </Col>
                <Col md={2} xs={12} className={styles.link}>
                    <a href="https://www.facebook.com/profile.php?id=100079936701832" target="_blank" rel="noopener noreferrer">
                        <BsFacebook size={36} className={styles.icons} id="shakeanimation"/>
                        Facebook
                    </a>
                </Col>
                <Col md={2} xs={12} className={styles.link}>
                    <a href="https://twitter.com/JeremyQuerne" target="_blank" rel="noopener noreferrer">
                        <BsTwitter size={36} className={styles.icons} id="shakeanimation"/>
                        Twitter
                    </a>
                </Col>
                <Col md={2} xs={12} className={styles.link}>
                    <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-quern%C3%A9-01920285/" target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={36} className={styles.icons} id="shakeanimation"/>
                        Linkedin
                    </a>
                </Col>
            </Row>
        </footer>
    )
}