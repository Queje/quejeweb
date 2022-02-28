import { Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/QJW.svg'
import navigationstyles from '../Navigation/Navigation.module.css'
import { BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import ReactCountryFlag from 'react-country-flag'

export default function Navigation() {

	return(
		<Row className={navigationstyles.navigation}>
			<Col md={3} className={navigationstyles.logobox}>
				<Link passhref href="/">
					<a>
						<Image
							src= { logo } // Route of the image file
							height={ 150 } // Desired size with correct aspect ratio
							width={ 150 } // Desired size with correct aspect ratio
							alt= "logo Que Je Web, Querné Jérémy Web devéloppeur"
						/>
					</a>
				</Link>
			</Col>
			<Col xs={4} md={3} className={navigationstyles.link}>
				<a href="tel:+0678866781">
					<BsFillPhoneFill size={56} className={navigationstyles.icons}/>
					<span className={navigationstyles.navtext}>0678866781</span>
				</a> 
			</Col>
			<Col xs={4} md={3} className={navigationstyles.link}>
				<a href="mailto:jeremy.querne@gmail.com">
					<GrMail size={56} className={navigationstyles.icons}/>
					<span className={navigationstyles.navtext}>email</span>
				</a> 
			</Col>
			<Col xs={4} md={3} className={navigationstyles.link}>
				<Button className={navigationstyles.custombutton}>
					<ReactCountryFlag
						className={navigationstyles.iconflag} 
						countryCode="GB" 
						alt="United Kingdom flag"
						svg
						style={{
							width: '1em',
							height: '1em',
						}}
						/>
					<span className={navigationstyles.textflag}>
						English
					</span>
				</Button>
			</Col>
		</Row>
	)
}
