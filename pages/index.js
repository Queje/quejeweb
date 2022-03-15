import styles from '../styles/Home.module.css'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'

export default function Home() {
  useEffect(() => {
    AOS.init()
  })

  const TopJumbotron = dynamic(() => import('../components/Jumbotron/TopJumbotron'))
  const BottomJumbotronWaves = dynamic(() => import('../components/Jumbotron/BottomJumbotronWaves'))
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
      </Head>

      <Navigation />

      <main className={styles.main}>
        <TopJumbotron />
        <BottomJumbotronWaves />

        <AboutMe />

        <WorkTogether />

        <Services />
        
        <Projects />
      </main>
      
      <Footer />

    </div>
  )
}
