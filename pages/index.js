import Head from 'next/head'
import Image from 'next/image'
import ImageComponent from '../components/ImageComponent'
import styles from '../styles/Home.module.css'
import profile from '../public/images/profile.jpg'
import Navigation from '../components/Navigation'
import Typical from 'react-typical'
import { Col, Row } from 'react-bootstrap'
import Wave from 'react-wavify'

export default function Home() {

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
        <Row className={styles.jumbotron}>
          <Col md={12} className={styles.topleftcorner}>
            <h1 className={styles.title}>
              <Typical
                  steps={[
                    'Que Je Web',
                    4000,
                    'Querné',
                    2000,
                    'Querné Jérémy',
                    2000,
                    'Querné Jérémy Web',
                    4000,
                  ]}
                  wrapper="p"
                  loop={Infinity}
              />
            </h1>
            <h2 className={styles.subtitle}>
              <p>Breizh Developpeur</p>
            </h2>
          </Col>
        </Row>
        <Row className={styles.jumbotron}>
          <Col md={12} className={styles.bottomrightcorner}>
            <Wave fill='#009FA5'
              paused={false}
              options={{
                height: 30,
                amplitude: 50,
                speed: 0.12,
                points: 3
              }}
            />
          </Col>
        </Row>

        <div>
          <h2 className={styles.subtitle}>About me ...</h2>
          <Row>
            <Col md={4}>
              <ImageComponent {...profile}/>
            </Col>
            <Col md={8}>
              <p className={styles.text}> bla bla bla about me </p>
            </Col>
          </Row>
        </div>

        <div>
          <h2 className={styles.subtitle}>Services ...</h2>
          <p className={styles.text}>Test test</p>
        </div>

        <div>
          <h2 className={styles.subtitle}>Mes Projets</h2>
          <p className={styles.text}>test Test test</p>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
