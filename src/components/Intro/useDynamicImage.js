import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const useDynamicImage = () => {
  const [smallImgLoaded, setSmallImgLoaded] = useState(false);
  const [largeImgLoaded, setLargeImgLoaded] = useState(false);

  useEffect(() => {
    // step 1: load small image and show it
    const smallImg = new Image();
    smallImg.src = '/assets/images/header_img_s.jpg';
    smallImg.onload = () => setSmallImgLoaded(true);

    // step 2: load large image
    const largeImg = new Image();
    largeImg.src = '/assets/images/header_img.jpg';
    largeImg.onload = () => setLargeImgLoaded(true);
  }, []);

  return { smallImgLoaded, largeImgLoaded };
};

export default useDynamicImage;
