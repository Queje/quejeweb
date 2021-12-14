import styles from '../styles/Home.module.css';
import { CgWebsite } from 'react-icons/cg';
import { BiCustomize } from 'react-icons/bi';
import { GiAutoRepair } from 'react-icons/gi';
import { BsShare } from 'react-icons/bs';

export default function Hexagongrid ({
	setIsShown1, 
	setIsShown2, 
	setIsShown3, 
	setIsShown4}) 
	{

	return(
		<section className={styles.hexagrid}>
			<div className={styles.hexagridwrapper}>
				<div className={styles.hexagon} 
					onMouseEnter={() => setIsShown1(true)}
					onMouseLeave={() => setIsShown1(false)}
				>
					<CgWebsite size={48} className={styles.iconslist1} />
				</div>
				<div className={styles.hexagon}
					onMouseEnter={() => setIsShown2(true)}
					onMouseLeave={() => setIsShown2(false)}
				>
					<BiCustomize size={48} className={styles.iconslist1}/>
				</div>
				<div className={styles.hexagon}
					onMouseEnter={() => setIsShown3(true)}
					onMouseLeave={() => setIsShown3(false)}
				>
					<GiAutoRepair size={48} className={styles.iconslist1}/>
				</div>
				<div className={styles.hexagon}
					onMouseEnter={() => setIsShown4(true)}
					onMouseLeave={() => setIsShown4(false)}
				>
					<BsShare size={48} className={styles.iconslist1}/>
				</div>
			</div>
		</section>	
	)
}



