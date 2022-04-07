import styles from '../AboutMe/AboutMe.module.css'
import { Col, Row} from 'react-bootstrap'
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview"
import { isMobile } from 'react-device-detect'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

export default function AboutMe() {

  const router = useRouter()
  const { t } = useTranslation('common');

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
          className={styles.aboutme}
          ref={observe}
        >
          { inView && 
          <>
            <h3 className={styles.propos}>{t('aboutmetitle')}</h3>
            <Row className={styles.aboutrow}>
              { !isMobile && 
                <AboutMeProfile />
              }

              <Col lg={5} xs={12} className={styles.profiletext}>
                {
                  router.locale === 'fr' ? (
                    <p id="bigtext"> {t('aboutmetext1a')} <span id="neontext">{t('aboutmetext1neon')}</span> {t('aboutmetext1b')} {t('aboutmetext1c')}</p>
                  ) : (
                    <p id="bigtext"> {t('aboutmetext1a')} {t('aboutmetext1b')} <span id="neontext">{t('aboutmetext1neon')}</span> {t('aboutmetext1c')}</p>
                  )
                }
                <p id="bigtext"> {t('aboutmetext2a')}<span id="neontext">{t('aboutmetext2b')}</span>{t('aboutmetext2c')}</p> 
                <p id="bigtext"> {t('aboutmetext3')} </p> 
                <p id="bigtext"> {t('aboutmetext4a')} <span id="neontext">{t('aboutmetext4b')}</span> !</p>
              </Col>

              <AboutMeRight />

            </Row>
            { !isMobile &&
              <> 
                <p id="text" className={styles.toolstitle}>{t('tools')}</p>
                <AboutMeLogo />
              </>
            }
            </>}
        </div>
    )
}