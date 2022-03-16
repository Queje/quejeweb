import styles from '../AboutMe/AboutMeLogo.module.css'
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { FaHtml5, 
    FaCss3Alt, 
    FaBootstrap, 
    FaGithub, 
    FaWordpressSimple, 
    FaWix, 
    FaReact } from 'react-icons/fa/'
import { DiRuby } from 'react-icons/di'
import { SiRubyonrails, 
    SiPostgresql, 
    SiJavascript, 
    SiNextdotjs, 
    SiHeroku, 
    SiVercel } from 'react-icons/si'

export default function AboutMeLogo() {
    return(
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
    )
}