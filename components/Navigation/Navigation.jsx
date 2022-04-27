import { Row, Col, Button } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import logo from '../../assets/QJW.webp'
import navigationstyles from '../Navigation/Navigation.module.css'
import { BsFillPhoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import ReactCountryFlag from 'react-country-flag'

export default function Navigation( ) {

	const router = useRouter()
	const { t } = useTranslation('common')

	return(
		<Row className={navigationstyles.navigation}>
			<Col md={3} className={navigationstyles.logobox}>
				<Link passHref href="/">
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
				<a href="tel:0033678866781">
					<BsFillPhoneFill size={56} id="shakeanimation"/>
					<span className={navigationstyles.navtext}>0678866781</span>
				</a> 
			</Col>
			<Col xs={4} md={3} className={navigationstyles.link}>
				<a href="mailto:jeremy.querne@gmail.com">
					<GrMail size={56} id="shakeanimation"/>
					<span className={navigationstyles.navtext}>email</span>
				</a> 
			</Col>
			<Col xs={4} md={3} className={navigationstyles.link}>
				<Link
					passHref
					href="/"
					locale={router.locale === 'fr' ? 'en' : 'fr'}
				>
					<Button className={navigationstyles.custombutton}>
						<ReactCountryFlag
							className={navigationstyles.iconflag} 
							countryCode={t('countryCode')}
							alt="flags"
							svg
							style={{
								width: '1em',
								height: '1em',
							}}
							/>
						<span className={navigationstyles.textflag}>
							{t('test')}
						</span>
					</Button>	
				</Link>
			</Col>
		</Row>
	)
}
