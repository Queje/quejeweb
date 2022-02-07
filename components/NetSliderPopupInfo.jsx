import styles from '../styles/Home.module.css';

export default function NetSliderPopupInfo () {

    return(
        <div className={styles.content}>
            <div className={styles.background}>
                <div className={styles.left}>left</div>
                <div className={styles.right}>right</div>
            </div>
            <div className={styles.contentcontainer}>content here...</div>
        </div>  
    )
}
