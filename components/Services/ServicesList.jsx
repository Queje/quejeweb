import styles from '../Services/ServicesList.module.css'
import { Col, Row } from 'react-bootstrap'
import { CgWebsite } from 'react-icons/cg'
import { BiCustomize } from 'react-icons/bi'
import { FaCashRegister } from 'react-icons/fa'
import { AiOutlineDatabase } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { GiAutoRepair } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import { BsShare } from 'react-icons/bs'
import photoservice1 from '../../assets/Service/websitesimple2gs.webp'
import photoservice2 from '../../assets/Service/surmesure2gs.webp'
import photoservice3 from '../../assets/Service/sales2gs.webp'
import photoservice4 from '../../assets/Service/database2gs.webp'
import photoservice5 from '../../assets/Service/phone2gs.webp'
import photoservice6 from '../../assets/Service/repair2gs.webp'
import photoservice7 from '../../assets/Service/seo2gs.webp'
import photoservice8 from '../../assets/Service/socialmedia2gs.webp'
import ServicesCards from './ServicesCards'

export default function ServicesList() {
    return(
        <>
            <Row md={12} xs={12}>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice1} 
                        servicetext={"Sites vitrines"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <CgWebsite size={48} className={styles.iconslist}/>
                            Sites vitrines
                            </p>
                            <p id="text">A partir de <span id="neontext">800 €</span></p>
                            <p id="text">un front-end simple en utilisant Wordpress ou Wix.</p>
                        </>
                        )}
                        alttext={"laptop showing a website"} 
                    />
                </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice2} 
                        servicetext={"Sites custom"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <BiCustomize size={48} className={styles.iconslist}/>
                            Sites custom
                            </p>
                            <p id="text">A partir de <span id="neontext">1000 €</span></p>
                            <p id="text">Un front-end responsive personalisé en ReactJs ou NextJs</p>
                            <p id="text">Pour vos projets sur mesure !</p>
                        </>
                        )}
                        alttext={"laptop showing a website"} 
                    />
                </Col>
            </Row>
            <Row md={12} xs={12}>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice3} 
                        servicetext={"Sites boutiques"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <FaCashRegister size={48} className={styles.iconslist}/>
                            Sites Boutiques
                            </p>
                            <p id="text">A partir de <span id="neontext">2000 €</span></p>
                            <p id="text">Un front sur mesure, des pages administrations, un back-end pour gérer vos données.</p>
                            <p id="text">Des moyens de payements en ligne sécurisé.</p>
                            <p id="text">Pour développer votre activité en ligne !</p>
                        </>
                        )}
                        alttext={"sales & business"} 
                    />
                </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice4} 
                        servicetext={"Bases de données"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <AiOutlineDatabase size={48} className={styles.iconslist}/>
                            Bases de données
                            </p>
                            <p id="text">A partir de <span id="neontext">1000 €</span></p>
                            <p id="text">Un back-end personalisé en ligne avec strapi ou sur mesure avec Ruby on Rails et PostgreSQL.</p>
                            <p id="text">Pour créer des API et bases de données pour gérér et accéder à vos données en toute sécurité.</p>
                        </>
                        )}
                        alttext={"writing code"} 
                    />
                </Col>
            </Row>
            <Row md={12} xs={12}>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice5} 
                        servicetext={"Applications"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <BsPhone size={48} className={styles.iconslist}/>
                            Applications
                            </p>
                            <p id="text">
                            <span id="neontext">
                                Sur devis
                            </span>
                            </p>
                            <p id="text">Avec ReactNative, pour developper des applications pour IOS et Android</p>
                        </>
                        )}
                        alttext={"phone"} 
                    />
                    </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice6} 
                        servicetext={"Retouches & Maintenance"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <GiAutoRepair size={48} className={styles.iconslist}/>
                            Retouches & Maintenance
                            </p>
                            <p id="text">
                            <span id="neontext">
                                Sur devis
                            </span>
                            </p>
                            <p id="text">Mises à jours? site trop lent? manque de temps?</p>
                            <p id="text">Pour vous aider à maintenir et améliorer votre communication en ligne!</p>
                        </>
                        )}
                        alttext={"tools to repair"} 
                    />
                </Col>
            </Row>
            <Row md={12} xs={12}>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice7} 
                        servicetext={"SEO & référencement"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <FiSearch size={48} className={styles.iconslist}/>
                            SEO & référencement
                            </p>
                            <p id="text">
                            <span id="neontext">
                                Sur devis
                            </span>
                            </p>
                            <p id="text">Améliorer votre référencement naturel pour être mieux visible par les moteurs de recherche!</p>
                        </>
                        )}
                        alttext={"seo"} 
                    />
                </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice8} 
                        servicetext={"Aide & Réseaux Sociaux"}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                            <BsShare size={48} className={styles.iconslist}/>
                            Aide & Réseaux Sociaux
                            </p>
                            <p id="text">
                            <span id="neontext">
                                Sur devis
                            </span>
                            </p>
                            <p id="text">Besoin d&apos;aide pour gérer vos réseaux sociaux?  </p>
                            <p id="text">Vous voulez être accompagner en informatique?</p>
                            <p id="text">Contactez moi!</p>
                        </>
                        )}
                        alttext={"social media"} 
                    />
                </Col>
          </Row>
        </>
    )
}