import styles from '../Projects/Projects.module.css'
// import AnimationBanner2 from '../Projects/AnimationBanner2'
import { Col, Row } from 'react-bootstrap'

import dynamic from 'next/dynamic'
import useInView from "react-cool-inview";

export default function Services () {
  
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  const ProjectsSlider = dynamic(() => import('./ProjectsSlider'), { loading: () => <p>...</p> })

    return (
        <Row 
          data-aos="flip-down"
          className={styles.projects}
        >
          <Col xs={12} md={12}>
            {/* <div className={styles.animationlogoprojects}>
              <AnimationBanner2/>     
            </div> */}
            <h3>Mes Projets ...</h3>
            <div id="description">
              <p id="text"> Quelques exemples de projets réalisés</p>
            </div>
          </Col>
          <Col xs={12} md={12} ref={observe}>
            { inView && 
              <ProjectsSlider />
            }
          </Col>
        </Row>
    )
}