import styles from '../styles/Home.module.css'
import Typical from 'react-typical'
import { Col, Row } from 'react-bootstrap'

export default function TopJumbotron () {

    return(
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
    )
}