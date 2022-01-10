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
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import Hexagongrid from '../components/Hexagongrid'
import AnimationBanner from '../components/AnimationBanner'
import AnimationBanner2 from '../components/AnimationBanner2'
import { FaHtml5} from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaWordpressSimple } from 'react-icons/fa'
import { FaWix } from 'react-icons/fa'
import { DiRuby } from 'react-icons/di'
import { SiRubyonrails } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'
import { SiVercel } from 'react-icons/si'
import ProjectsCarousel from '../components/ProjectsCarousel'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })
  
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  
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
                    '...',
                    10000,
                    'Que Je Web',
                    10000,
                    'Querné Jérémy Web',
                    10000,
                    'Que Je Web',
                    10000,
                    '...',
                    10000,
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
        <Row className={styles.row1}>
          <Col className={styles.bottomrightcorner}>
            <Wave fill='#043242'
              className={styles.wave1}
              paused={false}
              options={{
                height: 28,
                amplitude: 60,
                speed: 0.2,
                points: 3
              }}
            />
            <Wave fill='#30819C'
              className={styles.wave2}
              paused={false}
              options={{
                height: 16,
                amplitude: 32,
                speed: 0.4,
                points: 4
              }}
            />
          </Col>
        </Row>
        <div 
          data-aos="flip-down"
          className={styles.aboutme}
        >
          <h2 className={styles.subtitle}>A propos...</h2>
          <Row className={styles.row1}>
            <Col md={5} className={styles.imageprofile}>
              <ImageComponent {...profile}/>
            </Col>
            <Col md={6}>
              <p className={styles.text}> Je suis <span className={styles.neoneffect}>Jérémy Querné</span>, développeur web.</p> 
              <p className={styles.text}> Mon rôle est de vous accompagnez dans vos projets de <span className={styles.neoneffect}>communications digitales</span>.</p>
              <p className={styles.text}> A votre écoute pour vous proposez les outils les plus adaptés.</p> 
              <p className={styles.text}> Ensemble nous pourrons créer des sites et applications <span className={styles.neoneffect}>qui vous ressemblent</span> !</p>
            </Col>
          </Row>
          <div className={styles.inlinelogo}>
            <FaHtml5 size={60}/>
            <FaCss3Alt size={60}/>
            <FaBootstrap size={60} />
            <FaGithub size={54} />
            <FaWordpressSimple size={54} />
            <FaWix size={60} />
            <DiRuby size={54} />
            <SiRubyonrails size={60} />
            <SiPostgresql size={54} />
            <SiJavascript size={54} />
            <FaReact size={54} />
            <SiNextdotjs size={54} />
            <SiHeroku size={54} />
            <SiVercel size={54} />
          </div>
        </div>
        <div
          data-aos="flip-down"
        >
          <div className={styles.animationlogoservices}>
            <AnimationBanner />
          </div>
          <Row 
            className={styles.services}
          >
            <h2 className={styles.subtitle}>Services ...</h2>
            <Col xs={5} md={5} className="d-flex justify-content-end">
              < Hexagongrid
                isShown1={isShown1} 
                isShown2={isShown2} 
                isShown3={isShown3} 
                isShown4={isShown4} 
                setIsShown1={setIsShown1} 
                setIsShown2={setIsShown2}
                setIsShown3={setIsShown3}
                setIsShown4={setIsShown4}
              />
            </Col>
            <Col xs={7} md={7} className={styles.list}>
              {!isShown1 && (
                <p className={styles.textlist1} > 
                  Sites vitrines 
                </p>
              )}
              {isShown1 && (
                <>
                  <p className={styles.textlisttitle1} > 
                    Sites vitrines 
                  </p>
                  <p className={styles.show1}> A partir de 800 € !</p>
                  <p className={styles.show1sub}>en utilisant Wordpress ou wix ou un autre cms de votre choix</p>
                </>
              )}

              {!isShown2 && (
                <p className={styles.textlist2} > 
                  Sites customisés 
                </p>
              )}
              {isShown2 && (
                <>
                  <p className={styles.textlisttitle2} > 
                    Sites customisés 
                  </p>
                  <p className={styles.show2}> A partir de 1000 € !</p>
                  <p className={styles.show2sub}>un frontend responsive personalisé en ReactJs ou NextJs, 
                  des créations de bases de données ou des API en Ruby on Rails.</p>
                  <p className={styles.show2sub}> Pour vos projets plus ambitieux !</p>
                </>
              )}

              {!isShown3 && (
                <p className={styles.textlist3} > 
                  Retouches et mises à jours
                </p>
              )}
              {isShown3 && (
                <>
                  <p className={styles.textlisttitle1} > 
                    Retouches et mises à jours
                  </p>
                  <p className={styles.show1}> Sur Devis!</p>
                  <p className={styles.show1sub}>Un lifting pour votre site, des mises à jours?</p>
                  <p className={styles.show1sub}>Contactez moi pour en discuter.</p>
                </>
              )}

              {!isShown4 && (
                <p className={styles.textlist4} > 
                  Conseils réseaux sociaux et SEO
                </p>
              )}
              {isShown4 && (
                <>
                  <p className={styles.textlisttitle2} > 
                    Conseils réseaux sociaux et SEO
                  </p>
                  <p className={styles.show2}> Sur Devis!</p>
                  <p className={styles.show2sub}>Vous souhaitez mettre en place une stratégie cohérente pour être plus visible sur les réseaux sociaux et sur le web (SEO)? </p>
                  <p className={styles.show2sub}>Contactez moi pour en discuter.</p>
                </>
              )}
            </Col>
          </Row>
        </div>
        <Row 
          data-aos="flip-down"
          className={styles.projects}
        >
          <Col xs={12} md={12}>
            <div className={styles.animationlogoprojects}>
              <AnimationBanner2/>     
            </div>
            <h2 className={styles.subtitle}>Mes Projets</h2>
          </Col>
          <Col xs={12} md={12}>
            <ProjectsCarousel />
          </Col>
        </Row>
      </main>
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
    </div>
  )
}
