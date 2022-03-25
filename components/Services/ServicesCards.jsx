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

    function notMobile(e) {
        e.preventDefault();
    }

    return(
        <div 
            className={styles.servicescards}
            onMouseLeave={!isMobile ? (() => setIsShown(false)) : notMobile }
            onMouseEnter={!isMobile ? (() => setIsShown(true)) : notMobile }
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
                {
                    !isMobile &&
                         isShown ? (
                            <div>
                                { textoverlay }   
                            </div>
                        ) :
                        (
                            <div>
                                <p className={styles.servicedescription}>{ servicetext }</p>
                            </div>
                        )
                }
                {
                    isMobile && (
                        <div >
                            { textoverlay }   
                        </div>
                    )
                }
            </div>
        </div>
    )
}