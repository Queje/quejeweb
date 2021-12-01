import Head from 'next/head'
import ImageComponent from '../components/ImageComponent'
import styles from '../styles/Home.module.css'
import profile from '../public/images/profile.jpg'
import Navigation from '../components/Navigation'
import Typical from 'react-typical'
import { Col, Row } from 'react-bootstrap'
import Wave from 'react-wavify'
import { BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  AOS.init();

  return (
    <div className={styles.container}>
      <Head>
        <title>Que Je Web</title>
        <meta name="description" 
              content="Que Je Web, Querné Jérémy - développeur web - Morlaix - Finistère - Bretagne - France" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <Row className={styles.jumbotron}>
          <Col className={styles.topleftcorner}>
            <h1 className={styles.title}>
              <Typical
                  steps={[
                    'Que Je Web',
                    4000,
                    'Querné',
                    2000,
                    'Querné Jérémy',
                    2000,
                    'Querné Jérémy Web',
                    4000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
              />
            </h1>
            <h2 className={styles.title2}>
              <p><i>Breizh Developpeur</i></p>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className={styles.bottomrightcorner}>
            <Wave fill='#043242'
              paused={false}
              options={{
                height: 25,
                amplitude: 60,
                speed: 0.2,
                points: 3
              }}
            />
          </Col>
        </Row>
        <div 
          data-aos="flip-down"
          className={styles.aboutme}
        >
          <h2 className={styles.subtitle}>About me ...</h2>
          <Row>
            <Col md={4}>
              <ImageComponent {...profile}/>
            </Col>
            <Col md={8}>
              <p className={styles.text}> bla bla bla about me </p>
            </Col>
          </Row>
        </div>
        <div 
          data-aos="flip-down"
          className={styles.services}
        >
          <h2 className={styles.subtitle}>Services ...</h2>
          <p className={styles.text}>Test test</p>
        </div>
        <div 
          data-aos="flip-down"
          className={styles.projects}
        >
          <h2 className={styles.subtitle}>Mes Projets</h2>
          <p className={styles.text}>test Test test</p>
        </div>
      </main>
      <footer className={styles.footer}>
        <Row>
          <Col md={6} className={styles.link}>
            <a href="callto:+0678866781">
              <BsFillPhoneFill size={36} className={styles.icons}/>
              0678866781
            </a>
          </Col>
          <Col md={6} className={styles.link}>
            <a href="mailto:jeremy.querne@gmail.com">
              <GrMail size={36} className={styles.icons}/>
              email
            </a>
          </Col>
        </Row>
      </footer>
    </div>
  )
}
