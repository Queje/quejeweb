import styles from '../WorkTogether/WorkTogether.module.css'
import { Row, Col } from 'react-bootstrap'
import WorkCard from './WorkCard';
import { useTranslation } from 'next-i18next';

export default function WorkTogether() {

    const { t } = useTranslation('common');

    return(
        <section 
            className={styles.worktogether}
        >
            <h3 className={styles.worktitle}>{t('worktogethertitle')}</h3>
            <Row md={12} xs={12} id="description">
                <p id="bigtext">
                    {t('workdescription1')}
                        <span id="neontext">{t('workdescription2')}</span>
                    {t('workdescription3')}
                        <span id="neontext">{t('workdescription4')}</span>
                    {t('workdescription5')}
                </p>
                <p id="bigtext">{t('workdescription6')}</p>    
            </Row>
            <Row md={12} xs={12} >
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={1} 
                        title={t('workcardtext1a')}  
                        text={( 
                                <>
                                    {t('workcardtext1b')}
                                        <span id="neontext">{t('workcardtext1c')}</span>
                                    {t('workcardtext1d')}
                                        <span id="neontext">{t('workcardtext1e')}</span>
                                    {t('workcardtext1f')}   
                                </>
                            )}
                    />
                </Col>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={2} 
                        title={t('workcardtext2a')} 
                        text={t('workcardtext2b')} 
                    />
                </Col>
            </Row>
            <Row md={12} xs={12}>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={3} 
                        title={t('workcardtext3a')} 
                        text={t('workcardtext3b')}
                    />
                </Col>
                <Col md={6} xs={12} className={styles.justifycard}>
                    <WorkCard 
                        number={4} 
                        title={t('workcardtext4a')} 
                        text={(
                                <>
                                    <span className={styles.importanttext}>{t('workcardtext4b')}</span> 
                                    <br/>
                                    <small>{t('workcardtext4c')}</small>
                                </>
                            )}
                    />
                </Col>
            </Row>
        </section>
    )
}