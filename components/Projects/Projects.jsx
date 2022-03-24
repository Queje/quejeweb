import styles from '../Projects/Projects.module.css'
import { Col, Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview"
import { useTranslation } from 'next-i18next'

export default function Services () {

  const { t } = useTranslation('common');
  
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
          ref={observe}
        >
          <Col xs={12} md={12}>
            <h3>{t('projecttitle')}</h3>
            <div id="description">
              <p id="text">{t('projectdescription')}</p>
            </div>
          </Col>
          <Col xs={12} md={12}>
            { inView && 
              <ProjectsSlider />
            }
          </Col>
        </Row>
    )
}