import styles from '../Footer/Footer.module.css'
import { Col, Row } from 'react-bootstrap'
import { BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

export default function Footer () {

    return(
        <footer className={styles.footer}>
            <Row className="d-flex justify-content-evenly">
                <Col md={2} className={styles.link}>
                    <a href="callto:+0678866781">
                        <BsFillPhoneFill size={36} className={styles.icons}/>
                        0678866781
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="mailto:jeremy.querne@gmail.com">
                        <GrMail size={36} className={styles.icons}/>
                        email
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://github.com/Queje/Queje">
                        <BsGithub size={36} className={styles.icons}/>
                        Github
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://fr-fr.facebook.com/">
                        <BsFacebook size={36} className={styles.icons}/>
                        Facebook
                    </a>
                </Col>
                <Col md={2} className={styles.link}>
                    <a href="https://twitter.com/JeremyQuerne">
                        <BsTwitter size={36} className={styles.icons}/>
                        Twitter
                    </a>
                </Col>
            </Row>
        </footer>
    )
}