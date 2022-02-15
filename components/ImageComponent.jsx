import Image from 'next/image';
import styles from '../styles/Home.module.css';

const ImageComponent = ({filesource, height, width , alt}) => (
  <Image
    src= { filesource } // Route of the image file
    height={ height } // Desired size with correct aspect ratio
    width={ width } // Desired size with correct aspect ratio
    className={styles.profilepicture}
    alt= { alt } 
  />
);

export default ImageComponent;