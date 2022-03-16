import styles from '../AboutMe/AboutMe.module.css'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import Image from 'next/image'
import profile from '../../assets/AboutMe/profile2gs.webp'
import aboutpicture1 from '../../assets/AboutMe/teamwork2gs.webp'
import aboutpicture2 from '../../assets/AboutMe/screens2gs.webp'
import aboutpicture3 from '../../assets/AboutMe/webdev2gs.webp'
import aboutpicture4 from '../../assets/AboutMe/settings2gs.webp'
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

export default function AboutMe() {

    return(
        <div 
          data-aos="flip-down"
          className={styles.aboutme}
        >
          <h3 className={styles.propos}>A propos...</h3>
          <Row className={styles.aboutrow}>
            <Col lg={3} xs={12} className={styles.imageprofile}>
              <div className={styles.profileoverlay}></div>
              <div className={styles.profilewrapper}>
                <Image
                  src= { profile } // Route of the image file
                  layout="responsive"
                  height={ 425 } // Desired size with correct aspect ratio
                  width={ 400 } // Desired size with correct aspect ratio
                  className={styles.profilepicture}
                  alt= "Jérémy Querné, Développeur web fullstack"
                />
              </div>
            </Col>
            <Col lg={5} xs={12} className={styles.profiletext}>
              <p id="text"> Je suis <span id="neonlight">développeur web</span> full-stack.</p> 
              <p id="text"> Mon rôle est de vous accompagnez dans vos projets de <span id="neonlight">communications digitales</span>.</p>
              <p id="text"> A votre écoute pour vous proposez les outils les plus adaptés.</p> 
              <p id="text"> Ensemble nous pourrons créer des sites et applications <span id="neonlight">qui vous ressemblent</span> !</p>
            </Col>
            <Col lg={4} xs={12}>
              <Row>
                <Col md={6} xs={6}>
                  <div className={styles.pictureoverlay}>
                     Accompagnement & Conception
                  </div>
                  <Image
                    src= { aboutpicture1 } // Route of the image file
                    height={ 250 } // Desired size with correct aspect ratio
                    width={ 300 } // Desired size with correct aspect ratio
                    className={styles.aboutpicture1}
                    alt= "picture about team work" 
                  />
                </Col>
                <Col md={6} xs={6}>
                  <div className={styles.pictureoverlay}>
                    Sites pour toutes tailles d&apos;écrans
                  </div>
                  <Image
                    src= { aboutpicture2 } // Route of the image file
                    height={ 250 } // Desired size with correct aspect ratio
                    width={ 300 } // Desired size with correct aspect ratio
                    className={styles.aboutpicture2}
                    alt= "picture about different screens size to show responsive design" 
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={6}>
                  <div className={styles.pictureoverlay}>
                     Référencement naturel & SEO
                  </div>
                  <Image 
                    src= { aboutpicture3 } // Route of the image file
                    height={ 250 } // Desired size with correct aspect ratio
                    width={ 300 } // Desired size with correct aspect ratio
                    className={styles.aboutpicture3}
                    alt= "picture about someone working on a laptop"
                  />
                </Col>
                <Col md={6} xs={6}>
                  <div className={styles.pictureoverlay}>
                     Solutions d&apos;hébergement
                  </div>
                  <Image 
                    src= { aboutpicture4 } // Route of the image file
                    height={ 250 } // Desired size with correct aspect ratio
                    width={ 300 } // Desired size with correct aspect ratio
                    className={styles.aboutpicture4}
                    alt= "picture about a settings button on a site"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <p id="text" className={styles.toolstitle}>mes outils...</p>
          <Row className={styles.inlinelogo}>
            <Col lg={4} xs={12} className={styles.logowrapper}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    html 5
                  </Tooltip>
                }
              >
                <span>
                  <FaHtml5 size={60}/>
                </span>
              </OverlayTrigger>
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    css 3
                  </Tooltip>
                }
              >
                <span>
                  <FaCss3Alt size={60}/>
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Bootstrap
                  </Tooltip>
                }
              >
                <span>
                  <FaBootstrap size={60} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Github
                  </Tooltip>
                }
              >
                <span>
                  <FaGithub size={54} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Wordpress
                  </Tooltip>
                }
              >
                <span>
                  <FaWordpressSimple size={54} />
                </span>
              </OverlayTrigger>
            </Col>
            <Col lg={4} xs={12} id="middlelogowrapper" className={styles.logowrapper}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Wix
                  </Tooltip>
                }
              >
                <span>
                  <FaWix size={60} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Ruby
                  </Tooltip>
                }
              >
                <span>
                  <DiRuby size={54} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Ruby on Rails
                  </Tooltip>
                }
              >
                <span>
                  <SiRubyonrails size={60} />
                </span>
              </OverlayTrigger>  
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    PostgreSQL
                  </Tooltip>
                }
              >
                <span>
                  <SiPostgresql size={54} />
                </span>
              </OverlayTrigger>
            </Col>
            <Col lg={4} xs={12} className={styles.logowrapper}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Javascript
                  </Tooltip>
                }
              >
                <span>
                  <SiJavascript size={54} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    React
                  </Tooltip>
                }
              >
                <span>
                  <FaReact size={54} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    NextJs
                  </Tooltip>
                }
              >
                <span>
                  <SiNextdotjs size={54} />
                </span>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Heroku
                  </Tooltip>
                }
              >
                <span>
                  <SiHeroku size={54} />
                </span>
              </OverlayTrigger>  
              
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id="text">
                    Vercel
                  </Tooltip>
                }
              >
                <span>
                  <SiVercel size={54} />
                </span>
              </OverlayTrigger>
            </Col>
          </Row>
        </div>
    )
}