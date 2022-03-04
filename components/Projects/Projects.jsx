import styles from '../Projects/Projects.module.css'
import AnimationBanner2 from '../Projects/AnimationBanner2'
import { Col, Row } from 'react-bootstrap'
import ProjectsSlider from '../Projects/ProjectsSlider'

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
            <h3>Mes Projets ...</h3>
            <p id="text"> Quelques exemples de projets réalisés</p>
          </Col>
          <Col xs={12} md={12}>
            <ProjectsSlider />
          </Col>
        </Row>
    )
}