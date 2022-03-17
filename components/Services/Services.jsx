import styles from '../Services/Services.module.css'
// import AnimationBanner from '../Services/AnimationBanner'
import dynamic from 'next/dynamic'
import useInView from "react-cool-inview";

export default function Services () {
  
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  const ServicesList = dynamic(() => import('./ServicesList'), { loading: () => <p>...</p> })

  return(
    <section
      data-aos="flip-down"
      ref={ observe }
    >
        {/* <div className={styles.animationlogoservices}>
            <AnimationBanner />
        </div> */}
        <div
          className={styles.services}
        >
          <h3 
            className={styles.servicestitle}
          >
            Services ...
          </h3>
          <div id="description">
            <p id="text">Les différents types de projects sur lesquels je peux vous accompagner</p>
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