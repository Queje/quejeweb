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
            <Row className="d-flex justify-content-evenly">
                <Col md={2} className={styles.link}>
                    <a href="callto:+0678866781">
                        <BsFillPhoneFill size={36} className={styles.icons} id="shakeanimation"/>
                        0678866781
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="mailto:jeremy.querne@gmail.com">
                        <GrMail size={36} className={styles.icons} id="shakeanimation"/>
                        email
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://github.com/Queje/Queje">
                        <BsGithub size={36} className={styles.icons} id="shakeanimation"/>
                        Github
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://fr-fr.facebook.com/">
                        <BsFacebook size={36} className={styles.icons} id="shakeanimation"/>
                        Facebook
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://twitter.com/JeremyQuerne">
                        <BsTwitter size={36} className={styles.icons} id="shakeanimation"/>
                        Twitter
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-quern%C3%A9-01920285/">
                        <AiFillLinkedin size={36} className={styles.icons} id="shakeanimation"/>
                        Linkedin
                    </a>
                </Col>
            </Row>
        </footer>
    )
}