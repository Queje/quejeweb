import Image from 'next/image';

const ImageComponent = (filesource) => (
  <Image
    src= { filesource } // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={180} // Desired size with correct aspect ratio
    alt= 'Jérémy Querné, developpeur web'
  />
);

export default ImageComponent;