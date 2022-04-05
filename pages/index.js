import styles from '../styles/Home.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navigation from '../components/Navigation/Navigation'
import TopJumbotron from '../components/Jumbotron/TopJumbotron'
import Footer from '../components/Footer/Footer'
import useInView from "react-cool-inview"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import logo from '../assets/QJW.svg'

function Home() {

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });

  const AboutMe = dynamic(() => import('../components/AboutMe/AboutMe'))
  const WorkTogether = dynamic(() => import('../components/WorkTogether/WorkTogether'))
  const Services = dynamic(() => import('../components/Services/Services'),
  { loading: () => <p>...</p> })
  const Projects = dynamic(() => import('../components/Projects/Projects'),
  { loading: () => <p>...</p> })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Que Je Web - Developpeur Web full-stack</title>
        <meta name="description" 
              content="Que Je Web, Querné Jérémy - développeur web - Morlaix - Finistère - Bretagne - France" 
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="Que Je Web - Developpeur Web full-stack" key="twcard"/>
        <meta property="twitter:image" content={ logo } key="twimage"/>
        <meta property="twitter:site" content="@JeremyQuerne" key="twsite"/>

        {/* Open Graph */}
        <meta property="og:url" content="https://www.quejeweb.com" key="ogurl" />
        <meta property="og:image" content={ logo } key="ogimage" />
        <meta property="og:site_name" content="Que Je Web" key="ogsitename" />
        <meta property="og:title" content="Que Je Web - Developpeur Web full-stack" key="ogtitle" />
        <meta property="og:description" content="Pour réaliser vos sites et applications sur mesures" key="ogdesc" />
      </Head>

      <Navigation />

      <TopJumbotron />
      
      <main className={styles.main} ref={ observe }>
        { inView && 
          <>
            <AboutMe /> 
        
            <WorkTogether />
        
            <Services />
          
            <Projects />
          </>
        }
      </main>
      
      <Footer />

    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home



