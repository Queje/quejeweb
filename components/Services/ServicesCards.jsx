import styles from '../Services/ServicesCards.module.css'
import Image from 'next/image'
import { useState } from "react"

export default function ServicesCards({ src, textoverlay, servicetext, alttext }) {
    const [isShown, setIsShown] = useState(false);

    return(
        <div 
            className={styles.servicescards}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            { isShown && (
                <div className={styles.serviceoverlay}>
                    { textoverlay }   
                </div>
            )}
            { !isShown && (
                <div className={styles.servicetext}>
                    <p className={styles.servicedescription}>{ servicetext }</p>
                </div>
            )}
            <div className={styles.box}>
                <Image 
                    src= { src } // Route of the image file
                    height={ 400 } // Desired size with correct aspect ratio
                    width={ 600 } // Desired size with correct aspect ratio
                    className={styles.servicepicture}
                    alt= { alttext }
                    layout="responsive"
                />
            </div>
        </div>
    )
}