import styles from '../AboutMe/AboutMe.module.css'
import { Col, Row} from 'react-bootstrap'
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview";
import { isMobile } from 'react-device-detect';

export default function AboutMe() {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  const AboutMeProfile = dynamic(() => import('./AboutMeProfile'), { loading: () => <p>...</p> })
  const AboutMeRight = dynamic(() => import('./AboutMeRight'), { loading: () => <p>...</p> })
  const AboutMeLogo = dynamic(() => import('./AboutMeLogo'), { loading: () => <p>...</p> })
    
    return(
        <div 
          data-aos="flip-down"
          className={styles.aboutme}
          ref={observe}
        >
          { inView && 
          <>
            <h3 className={styles.propos}>A propos...</h3>
            <Row className={styles.aboutrow}>
              { !isMobile && 
                <AboutMeProfile />
              }

              <Col lg={5} xs={12} className={styles.profiletext}>
                <p id="text"> Je suis <span id="neonlight">développeur web</span> full-stack.</p> 
                <p id="text"> Mon rôle est de vous accompagnez dans vos projets de <span id="neonlight">communications digitales</span>.</p>
                <p id="text"> A votre écoute pour vous proposez les outils les plus adaptés.</p> 
                <p id="text"> Ensemble nous pourrons créer des sites et applications <span id="neonlight">qui vous ressemblent</span> !</p>
              </Col>

              <AboutMeRight />

            </Row>
            <p id="text" className={styles.toolstitle}>mes outils...</p>
            { !isMobile && 
              <AboutMeLogo />
            }
            </>}
        </div>
    )
}