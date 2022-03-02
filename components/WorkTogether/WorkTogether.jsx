import styles from '../WorkTogether/WorkTogether.module.css'
import { Row, Col } from 'react-bootstrap'
import WorkCard from './WorkCard';

export default function WorkTogether() {

    return(
        <section className={styles.worktogether}>
            <h3 className={styles.worktitle}>Travaillons ensemble...</h3>
            <Row md={12} xs={12} >
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={1} 
                        title={"Rencontre"} 
                        text={"Déroulement du 1er rendez-vous"}
                    />
                </Col>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={2} 
                        title={"Préparation"} 
                        text={"Traduire vos besoins en solutions et validez avec vous"} 
                    />
                </Col>
            </Row>
            <Row md={12} xs={12}>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={3} 
                        title={"Développement"} 
                        text={"Création du site..."} 
                    />
                </Col>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={4} 
                        title={"Livraison"} 
                        text={(
                                <>
                                    <p>Le site est à vous!</p> 
                                    <small>je reste disponible pour la maintenance et les mises à jours...</small>
                                </>
                            )}
                    />
                </Col>
            </Row>
        </section>
    )
}