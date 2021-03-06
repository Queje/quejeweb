import styles from '../AboutMe/AboutMeRight.module.css'
import { Col, Row} from 'react-bootstrap'
import Image from 'next/image'
import aboutpicture1 from '../../assets/AboutMe/teamwork3.webp'
import aboutpicture2 from '../../assets/AboutMe/screens3.webp'
import aboutpicture3 from '../../assets/AboutMe/webdev3.webp'
import aboutpicture4 from '../../assets/AboutMe/settings3.webp'
import { useTranslation } from 'next-i18next';

export default function AboutMeRight() {

    const { t } = useTranslation('common');

    return(
        <Col lg={4} xs={12}>
            <Row className={styles.aboutmerow}>
                <Col md={6} xs={6} className={styles.aboutmecol}>
                    <div className={styles.aboutmegrid}>
                        <Image
                            src= { aboutpicture1 } // Route of the image file
                            height={ 250 } // Desired size with correct aspect ratio
                            width={ 300 } // Desired size with correct aspect ratio
                            className={styles.aboutpicture1}
                            alt= "picture about team work" 
                            layout="responsive"
                        />
                        <div>
                            {t('aboutmephoto1')}
                        </div>
                    </div>
                </Col>
                <Col md={6} xs={6} className={styles.aboutmecol}> 
                    <div className={styles.aboutmegrid}>
                        <Image
                            src= { aboutpicture2 } // Route of the image file
                            height={ 250 } // Desired size with correct aspect ratio
                            width={ 300 } // Desired size with correct aspect ratio
                            className={styles.aboutpicture2}
                            alt= "picture about different screens size to show responsive design" 
                            layout="responsive"
                        />
                        <div>
                            {t('aboutmephoto2')}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={styles.aboutmerow}>
                <Col md={6} xs={6} className={styles.aboutmecol}>
                    <div className={styles.aboutmegrid}>
                        <Image 
                            src= { aboutpicture3 } // Route of the image file
                            height={ 250 } // Desired size with correct aspect ratio
                            width={ 300 } // Desired size with correct aspect ratio
                            className={styles.aboutpicture3}
                            alt= "picture about someone working on a laptop"
                            layout="responsive"
                        />
                        <div>
                            {t('aboutmephoto3')}
                        </div>
                    </div>
                </Col>
                <Col md={6} xs={6} className={styles.aboutmecol}>
                    <div className={styles.aboutmegrid}>
                        <Image 
                            src= { aboutpicture4 } // Route of the image file
                            height={ 250 } // Desired size with correct aspect ratio
                            width={ 300 } // Desired size with correct aspect ratio
                            className={styles.aboutpicture4}
                            alt= "picture about a settings button on a site"
                            layout="responsive"
                        />
                        <div>
                            {t('aboutmephoto4')}
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}