import topjumbostyle from '../Jumbotron/TopJumbotron.module.css'
import Typical from 'react-typical'
import { Col, Row } from 'react-bootstrap'

export default function TopJumbotron () {

    return(
        <Row className={topjumbostyle.jumbotron}>
          <Col className={topjumbostyle.topleftcorner}>
            <h1>
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
            <h2>
              <p><i>Breizh Developpeur</i></p>
            </h2>
          </Col>
        </Row>
    )
}