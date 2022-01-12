import styles from '../styles/Home.module.css'
import AnimationBanner from '../components/AnimationBanner'
import { Col, Row } from 'react-bootstrap'
import Hexagongrid from '../components/Hexagongrid'
import { useState } from "react"

export default function Services () {

    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);

    return(
    <div data-aos="flip-down">
        <div className={styles.animationlogoservices}>
            <AnimationBanner />
        </div>
        <Row 
            className={styles.services}
        >
            <h2 className={styles.subtitle}>Services ...</h2>
            <Col xs={5} md={5} className="d-flex justify-content-end">
              < Hexagongrid
                isShown1={isShown1} 
                isShown2={isShown2} 
                isShown3={isShown3} 
                isShown4={isShown4} 
                setIsShown1={setIsShown1} 
                setIsShown2={setIsShown2}
                setIsShown3={setIsShown3}
                setIsShown4={setIsShown4}
              />
            </Col>
            <Col xs={7} md={7} className={styles.list}>
              {!isShown1 && (
                <p className={styles.textlist1} > 
                  Sites vitrines 
                </p>
              )}
              {isShown1 && (
                <>
                  <p className={styles.textlisttitle1} > 
                    Sites vitrines 
                  </p>
                  <p className={styles.show1}> A partir de 800 € !</p>
                  <p className={styles.show1sub}>en utilisant Wordpress ou wix ou un autre cms de votre choix</p>
                </>
              )}

              {!isShown2 && (
                <p className={styles.textlist2} > 
                  Sites customisés 
                </p>
              )}
              {isShown2 && (
                <>
                  <p className={styles.textlisttitle2} > 
                    Sites customisés 
                  </p>
                  <p className={styles.show2}> A partir de 1000 € !</p>
                  <p className={styles.show2sub}>un frontend responsive personalisé en ReactJs ou NextJs, 
                  des créations de bases de données ou des API en Ruby on Rails.</p>
                  <p className={styles.show2sub}> Pour vos projets plus ambitieux !</p>
                </>
              )}

              {!isShown3 && (
                <p className={styles.textlist3} > 
                  Retouches et mises à jours
                </p>
              )}
              {isShown3 && (
                <>
                  <p className={styles.textlisttitle1} > 
                    Retouches et mises à jours
                  </p>
                  <p className={styles.show1}> Sur Devis!</p>
                  <p className={styles.show1sub}>Un lifting pour votre site, des mises à jours?</p>
                  <p className={styles.show1sub}>Contactez moi pour en discuter.</p>
                </>
              )}

              {!isShown4 && (
                <p className={styles.textlist4} > 
                  Conseils réseaux sociaux et SEO
                </p>
              )}
              {isShown4 && (
                <>
                  <p className={styles.textlisttitle2} > 
                    Conseils réseaux sociaux et SEO
                  </p>
                  <p className={styles.show2}> Sur Devis!</p>
                  <p className={styles.show2sub}>Vous souhaitez mettre en place une stratégie cohérente pour être plus visible sur les réseaux sociaux et sur le web (SEO)? </p>
                  <p className={styles.show2sub}>Contactez moi pour en discuter.</p>
                </>
              )}
            </Col>
        </Row>
    </div>
    )
}