import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ImageComponent = (filesource) => (
  <Image
    src= { filesource } // Route of the image file
    height={250} // Desired size with correct aspect ratio
    width={290} // Desired size with correct aspect ratio
    className={styles.profilepicture}
    alt= 'Jérémy Querné, developpeur web'
  />
);

export default ImageComponent;