import styles from '../styles/Home.module.css';
import { Row, Col } from 'react-bootstrap'
import Wave from 'react-wavify'

export default function BottomJumbotronWaves () {

    return(
        <Row className={styles.row1}>
          <Col className={styles.bottomrightcorner}>
            <Wave fill='#043242'
              className={styles.wave1}
              paused={false}
              options={{
                height: 28,
                amplitude: 60,
                speed: 0.2,
                points: 3
              }}
            />
            <Wave fill='#30819C'
              className={styles.wave2}
              paused={false}
              options={{
                height: 16,
                amplitude: 32,
                speed: 0.4,
                points: 4
              }}
            />
          </Col>
        </Row>
    )
}