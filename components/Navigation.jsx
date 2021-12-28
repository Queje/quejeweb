import { Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link'
import ImageComponent from './ImageComponent';
import logo from '../assets/QJW.svg';
import styles from '../styles/Home.module.css';
import { BsFillPhoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import ReactCountryFlag from 'react-country-flag';

export default function Navigation() {

	return(
		<Row className={styles.navigation}>
			<Col md={3} className={styles.logobox}>
				<Link passhref href="/">
					<a>
						<ImageComponent {...logo}/>
					</a>
				</Link>
			</Col>
			<Col xs={4} md={3} className={styles.link}>
				<a href="tel:+0678866781">
					<BsFillPhoneFill size={56} className={styles.icons}/>
					<span className={styles.navtext}>0678866781</span>
				</a> 
			</Col>
			<Col xs={4} md={3} className={styles.link}>
				<a href="mailto:jeremy.querne@gmail.com">
					<GrMail size={56} className={styles.icons}/>
					<span className={styles.navtext}>email</span>
				</a> 
			</Col>
			<Col xs={4} md={3} className={styles.link}>
				<Button className={styles.custombutton}>
					<ReactCountryFlag
						className={styles.iconflag} 
						countryCode="GB" 
						alt="United Kingdom flag"
						svg
						style={{
							width: '1em',
							height: '1em',
						}}
						/>
					<span className={styles.textflag}>
						English
					</span>
				</Button>
			</Col>
		</Row>
	)
}
