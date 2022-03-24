import styles from '../Services/ServicesCards.module.css'
import Image from 'next/image'
import { useState } from "react"
import { isMobile } from 'react-device-detect'

export default function ServicesCards({ src, textoverlay, servicetext, alttext }) {
    const [isShown, setIsShown] = useState(false);

    function handleClick (e) {
        e.preventDefault();
        isShown ? setIsShown(false) : setIsShown(true)
    }

    function notOnMobile(e) {
        e.preventDefault();
    }

    return(
        <div 
            className={styles.servicescards}
            onMouseLeave={!isMobile ? (() => setIsShown(false)) : notOnMobile }
            onMouseEnter={!isMobile ? (() => setIsShown(true)) : notOnMobile }
            onClick={isMobile ? handleClick : notOnMobile }
        >
            <div className={styles.box}>
                <Image 
                    src= { src } // Route of the image file
                    height={ 400 } // Desired size with correct aspect ratio
                    width={ 600 } // Desired size with correct aspect ratio
                    className={styles.servicepicture}
                    alt= { alttext }
                    layout="responsive"
                />
                { isShown && (
                    <div >
                        { textoverlay }   
                    </div>
                )}
                { !isShown && (
                    <div >
                        <p className={styles.servicedescription}>{ servicetext }</p>
                    </div>
                )}
            </div>
        </div>
    )
}