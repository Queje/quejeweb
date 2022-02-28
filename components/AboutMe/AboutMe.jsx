import styles from '../AboutMe/AboutMe.module.css'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import Image from 'next/image'
import profile from '../../public/images/profile.jpg'
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
          <h3>A propos...</h3>
          <Row className={styles.aboutrow}>
            <Col md={5} className={styles.imageprofile}>
              <Image
                src= { profile } // Route of the image file
                height={ 200 } // Desired size with correct aspect ratio
                width={ 250 } // Desired size with correct aspect ratio
                className={styles.profilepicture}
                alt= "Jérémy Querné, Développeur web fullstack"
              />
            </Col>
            <Col md={6}>
              <p id="text"> Je suis <span id="neonlight">Jérémy Querné</span>, développeur web.</p> 
              <p id="text"> Mon rôle est de vous accompagnez dans vos projets de <span id="neonlight">communications digitales</span>.</p>
              <p id="text"> A votre écoute pour vous proposez les outils les plus adaptés.</p> 
              <p id="text"> Ensemble nous pourrons créer des sites et applications <span id="neonlight">qui vous ressemblent</span> !</p>
            </Col>
          </Row>
          <div className={styles.inlinelogo}>
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
          </div>
        </div>
    )
}