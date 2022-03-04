import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from '../components/Navigation/Navigation'
import TopJumbotron from '../components/Jumbotron/TopJumbotron'
import BottomJumbotronWaves from '../components/Jumbotron/BottomJumbotronWaves'
import AboutMe from '../components/AboutMe/AboutMe'
import Services from '../components/Services/Services'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'
import WorkTogether from '../components/WorkTogether/WorkTogether'


export default function Home() {
  useEffect(() => {
    AOS.init()
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Que Je Web - Developpeur Web full-stack</title>
        <meta name="description" 
              content="Que Je Web, Querné Jérémy - développeur web - Morlaix - Finistère - Bretagne - France" 
        />
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
