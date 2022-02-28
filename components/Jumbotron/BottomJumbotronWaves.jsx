import jumbostyle from '../Jumbotron/BottomJumbotronWaves.module.css'
import { Row, Col } from 'react-bootstrap'
import Wave from 'react-wavify'

export default function BottomJumbotronWaves () {

    return(
        <Row className={jumbostyle.row1}>
          <Col className={jumbostyle.bottomrightcorner}>
            <Wave fill='#043242'
              className={jumbostyle.wave1}
              paused={false}
              options={{
                height: 28,
                amplitude: 60,
                speed: 0.2,
                points: 3
              }}
            />
            <Wave fill='#30819C'
              className={jumbostyle.wave2}
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