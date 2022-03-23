import styles from '../WorkTogether/WorkCard.module.css'
import { Card } from 'react-bootstrap'
import { BsCircle } from 'react-icons/bs'
import { useState } from 'react'

export default function WorkCardDesktop({ number, title, text }) {
    const [isShown, setIsShown] = useState(false);

    function handleClick(e){
        e.preventDefault();
        isShown ? setIsShown(false):setIsShown(true)
    }
    
    return(
        <Card
            className={styles.card}
            onMouseEnter={handleClick}
            onMouseLeave={handleClick}
        >
            {isShown && (
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
            )}
            {!isShown && (
                <Card.Body >
                    <Card.Title>
                        <span className={styles.cardicon}>
                            <BsCircle size={32}/>
                            <span className={styles.cardnumber}>{ number }</span>
                        </span>
                        <span className={styles.cardtitletext}>
                            { title }
                        </span>
                    </Card.Title>
                    <Card.Text>
                        { text }
                    </Card.Text>
                </Card.Body>
            )}
        </Card>
    )
}