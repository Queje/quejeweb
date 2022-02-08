import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from '../components/Navigation'
import TopJumbotron from '../components/TopJumbotron'
import BottomJumbotronWaves from '../components/BottomJumbotronWaves'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Footer from '../components/Footer'


export default function Home() {
  useEffect(() => {
    AOS.init()
  })
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Que Je Web</title>
        <meta name="description" 
              content="Que Je Web, Querné Jérémy - développeur web - Morlaix - Finistère - Bretagne - France" 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <TopJumbotron />
        <BottomJumbotronWaves />

        <AboutMe data-aos="flip-down"/>

        <Services />
        
        <Projects />
      </main>
      
      <Footer />

    </div>
  )
}
