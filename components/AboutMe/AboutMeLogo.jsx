import styles from '../AboutMe/AboutMeLogo.module.css'
import { Col, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview";

export default function AboutMeLogo() {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  const AboutMeLogo1 = dynamic(() => import('./AboutMeLogo1'))
  const AboutMeLogo2 = dynamic(() => import('./AboutMeLogo2'))
  const AboutMeLogo3 = dynamic(() => import('./AboutMeLogo3'))

  return(
      <Row className={styles.inlinelogo} ref={ observe }>
        <Col lg={4} xs={12} className={styles.logowrapper}>
          { inView && <AboutMeLogo1 />}
        </Col>
        <Col lg={4} xs={12} id="middlelogowrapper" className={styles.logowrapper}>
          { inView && <AboutMeLogo2 />}
        </Col>
        <Col lg={4} xs={12} className={styles.logowrapper}>
          { inView && <AboutMeLogo3 />}
        </Col>
      </Row>
    )
}