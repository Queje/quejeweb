import styles from '../styles/Home.module.css'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import ImageComponent from './ImageComponent'
import profile from '../public/images/profile.jpg'
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
            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
                  Wordpress
                </Tooltip>
              }
            >
              <span>
                <FaWordpressSimple size={54} />
              </span>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
                  PostgreSQL
                </Tooltip>
              }
            >
              <span>
                <SiPostgresql size={54} />
              </span>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              delay={{ show: 250, hide: 400 }}
              overlay={
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
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
                <Tooltip className={styles.text}>
                  Vercel
                </Tooltip>
              }
            >
              <span>
                <SiVercel size={54} />
              </span>
            </OverlayTrigger>
          </div>
        </div>
    )
}