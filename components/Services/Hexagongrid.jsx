import styles from '../Services/Hexagongrid.module.css';
import { CgWebsite } from 'react-icons/cg';
import { BiCustomize } from 'react-icons/bi';
import { GiAutoRepair } from 'react-icons/gi';
import { BsShare } from 'react-icons/bs';

export default function Hexagongrid ({
	isShown1,
	isShown2,
	isShown3,
	isShown4,
	setIsShown1, 
	setIsShown2, 
	setIsShown3, 
	setIsShown4}) 

{
	return(
		<section className={styles.hexagrid}>
			<div className={styles.hexagridwrapper}>
				<div className={styles.hexagon} 
					onClick={() => {
						if (isShown1===false) {setIsShown1(true)}
						else {setIsShown1(false)}
					}}
				>
					<CgWebsite size={48} className={styles.iconslist1} />
				</div>
				<div className={styles.hexagon}
					onClick={() => {
						if (isShown2===false) {setIsShown2(true)}
						else {setIsShown2(false)}
					}}
				>
					<BiCustomize size={48} className={styles.iconslist1}/>
				</div>
				<div className={styles.hexagon}
					onClick={() => {
						if (isShown3===false) {setIsShown3(true)}
						else {setIsShown3(false)}
					}}
				>
					<GiAutoRepair size={48} className={styles.iconslist1}/>
				</div>
				<div className={styles.hexagon}
					onClick={() => {
						if (isShown4===false) {setIsShown4(true)}
						else {setIsShown4(false)}
					}}
				>
					<BsShare size={48} className={styles.iconslist1}/>
				</div>
			</div>
		</section>	
	)
}



