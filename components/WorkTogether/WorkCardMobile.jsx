import styles from '../WorkTogether/WorkCard.module.css'
import { Card } from 'react-bootstrap'
import { BsCircle } from 'react-icons/bs'

export default function WorkCardMobile({ number, title, text }) {
    return(
        <Card className={styles.cardmobile}>
            <Card.Body >
                <Card.Title>
                    <span id="neontext" className={styles.cardicon}>
                        <BsCircle size={32}/>
                        <span className={styles.cardnumber}>{ number }</span>
                    </span>
                    <span id="neontext" className={styles.cardtitletext}>
                        { title }
                    </span>
                </Card.Title>
                <Card.Text>
                    { text }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}