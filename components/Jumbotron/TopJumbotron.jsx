import topjumbostyle from '../Jumbotron/TopJumbotron.module.css'
import Typical from 'react-typical'
import { Col, Row } from 'react-bootstrap'

export default function TopJumbotron () {

    return(
        <div className={topjumbostyle.jumbotron}>
          <div className={topjumbostyle.topleftcorner}>
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1232 320">
              <path fill="#043242" fillOpacity="1" d="M0,128L40,133.3C80,139,160,149,240,133.3C320,117,400,75,480,53.3C560,32,640,32,720,48C800,64,880,96,960,138.7C1040,181,1120,235,1200,245.3C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
              </path>
            </svg>
          </div>
        </div>
    )
}