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
import { useTranslation } from 'next-i18next'

export default function ServicesList() {
    
    const { t } = useTranslation('common');

    return(
        <>
            <Row md={12} xs={12}>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice1} 
                        servicetext={t('card1title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <CgWebsite size={48} className={styles.iconslist}/>
                                {t('card1title')}
                            </p>
                            <p id="text">{t('card1text1')}<span id="neontext">{t('card1text2')}</span></p>
                            <p id="text">{t('card1text3')}</p>
                        </>
                        )}
                        alttext={"laptop showing a website"} 
                    />
                </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice2} 
                        servicetext={t('card2title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <BiCustomize size={48} className={styles.iconslist}/>
                                {t('card2title')}
                            </p>
                            <p id="text">{t('card2text1')}<span id="neontext">{t('card2text2')}</span></p>
                            <p id="text">{t('card2text3')}</p>
                            <p id="text">{t('card2text4')}</p>
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
                        servicetext={t('card3title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <FaCashRegister size={48} className={styles.iconslist}/>
                                {t('card3title')}
                            </p>
                            <p id="text">{t('card3text1')}<span id="neontext">{t('card3text2')}</span></p>
                            <p id="text">{t('card3text3')}{t('card3text4')}</p>
                            <p id="text">{t('card3text5')}</p>
                        </>
                        )}
                        alttext={"sales & business"} 
                    />
                </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice4} 
                        servicetext={t('card4title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <AiOutlineDatabase size={48} className={styles.iconslist}/>
                                {t('card4title')}
                            </p>
                            <p id="text">{t('card4text1')}<span id="neontext">{t('card4text2')}</span></p>
                            <p id="text">{t('card4text3')}</p>
                            <p id="text">{t('card4text4')}</p>
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
                        servicetext={t('card5title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <BsPhone size={48} className={styles.iconslist}/>
                                {t('card5title')}
                            </p>
                            <p id="text">
                                <span id="neontext">
                                    {t('card5text1')}
                                </span>
                            </p>
                            <p id="text">{t('card5text2')}</p>
                        </>
                        )}
                        alttext={"phone"} 
                    />
                    </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice6} 
                        servicetext={t('card6title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <GiAutoRepair size={48} className={styles.iconslist}/>
                                {t('card6title')}
                            </p>
                            <p id="text">
                                <span id="neontext">
                                    {t('card6text1')}
                                </span>
                            </p>
                            <p id="text">{t('card6text2')}</p>
                            <p id="text">{t('card6text3')}</p>
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
                        servicetext={t('card7title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <FiSearch size={48} className={styles.iconslist}/>
                                {t('card7title')}
                            </p>
                            <p id="text">
                                <span id="neontext">
                                    {t('card7text1')}
                                </span>
                            </p>
                            <p id="text">{t('card7text2')}</p>
                        </>
                        )}
                        alttext={"seo"} 
                    />
                </Col>
                <Col md={6} xs={12}>
                    <ServicesCards 
                        src={photoservice8} 
                        servicetext={t('card8title')}
                        textoverlay= {(
                        <>
                            <p className={styles.show1}>
                                <BsShare size={48} className={styles.iconslist}/>
                                {t('card8title')}
                            </p>
                            <p id="text">
                            <span id="neontext">
                                {t('card8text1')}
                            </span>
                            </p>
                            <p id="text">{t('card8text2')}</p>
                            <p id="text">{t('card8text3')}</p>
                        </>
                        )}
                        alttext={"social media"} 
                    />
                </Col>
          </Row>
        </>
    )
}