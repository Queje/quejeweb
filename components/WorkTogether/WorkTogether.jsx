import styles from '../WorkTogether/WorkTogether.module.css'
import { Row, Col } from 'react-bootstrap'
import WorkCard from './WorkCard';

export default function WorkTogether() {

    return(
        <section 
            data-aos="flip-down" 
            className={styles.worktogether}
        >
            <h3 className={styles.worktitle}>Travaillons ensemble...</h3>
            <Row md={12} xs={12} id="description">
                <p id="text">Le premier rendez-vous est <span id="neonlight">gratuit</span> et les <span id="neonlight">devis</span> aussi.</p>
                <p id="text">N&apos;hésitez pas à me contacter!</p>    
            </Row>
            <Row md={12} xs={12} >
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={1} 
                        title={"Rencontre"} 
                        text={"Un 1er rendez-vous où nous discutons de votre project, des fonctionnalités que vous souhaitez. "}
                    />
                </Col>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={2} 
                        title={"Préparation"} 
                        text={"Traduire vos besoins en solutions concrètes, en cohérences avec vos besoins et les validez avec vous."} 
                    />
                </Col>
            </Row>
            <Row md={12} xs={12}>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={3} 
                        title={"Développement"} 
                        text={"Mise en oeuvre du projet et création du site selon vos envies."} 
                    />
                </Col>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={4} 
                        title={"Livraison"} 
                        text={(
                                <>
                                    <p className={styles.importanttext}>Le site est à vous!</p> 
                                    <small>je reste disponible pour la maintenance et les mises à jours...</small>
                                </>
                            )}
                    />
                </Col>
            </Row>
        </section>
    )
}