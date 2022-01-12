import styles from '../styles/Home.module.css'
import AnimationBanner2 from '../components/AnimationBanner'
import { Col, Row } from 'react-bootstrap'
import ProjectsCarousel from './ProjectsCarousel'

export default function Services () {

    return (
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
    )
}