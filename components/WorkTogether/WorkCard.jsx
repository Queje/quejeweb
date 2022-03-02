import styles from '../WorkTogether/WorkCard.module.css'
import { Card } from 'react-bootstrap'
import { BsCircle } from 'react-icons/bs'
import { useState } from 'react';

export default function WorkCard ({ number, title, text}) {
    const [isShown, setIsShown] = useState(false);

    return(
        <Card className={styles.card}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {isShown && (
                <Card.Body>
                    <Card.Title>
                        <span id="neonlight" className={styles.cardicon}>
                            <BsCircle size={32}/>
                            <span className={styles.cardnumber}>{ number }</span>
                        </span>
                        <span id="neonlight" className={styles.cardtitletext}>
                            { title }
                        </span>
                    </Card.Title>
                    <Card.Text>
                        { text }
                    </Card.Text>
                </Card.Body>
            )}
            {!isShown && (
                <Card.Body>
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