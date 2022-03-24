import styles from '../Services/Services.module.css'
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview"
import { useTranslation } from 'next-i18next'

export default function Services () {

  const { t } = useTranslation('common');
  
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  const ServicesList = dynamic(() => import('./ServicesList'), { loading: () => <p>...</p> })

  return(
    <section
      ref={ observe }
    >
        <div
          className={styles.services}
        >
          <h3 
            className={styles.servicestitle}
          >
            {t('servicestitle')}
          </h3>
          <div id="description">
            <p id="text" className={styles.servicetextdescription}>
              {t('servicesdescription')}
            </p>
          </div>
          <div>
            { inView && 
              <ServicesList />
            }
          </div>
        </div>
    </section>
  )
}