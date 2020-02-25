import './style.scss';

import React, { useEffect, useState } from 'react';

import { IntroInfo } from '../../data/personal';

import largeHeaderImg from '../../assets/images/header_img.jpg';
import smallHeaderImg from '../../assets/images/header_img_s.jpg';

export function Intro() {

  const [smallImgLoaded, setSmallImgLoaded] = useState(false);
  const [largeImgLoaded, setLargeImgLoaded] = useState(false);

  useEffect(() => {
    // step 1: load small image and show it
    const smallImg = new Image();
    smallImg.src = smallHeaderImg;
    smallImg.onload = () => setSmallImgLoaded(true);

    // step 2: load large image
    const largeImg = new Image();
    largeImg.src = largeHeaderImg;
    largeImg.onload = () => setLargeImgLoaded(true);
  }, []);

  const headerStyle = // set header background once large img loads
    largeImgLoaded ? { backgroundImage: `url(${largeHeaderImg})` } : {};
  
  const smallImgExtraClasses = // hide small img once large loads
    `${smallImgLoaded ? 'loaded' : ''} ${largeImgLoaded ? 'large-loaded' : ''}`;

  return (
    <div>
      <header className="placeholder relative z-depth-2" style={headerStyle}>
        <div className="large-background"></div>
        <img src={smallHeaderImg} className={`img-small ${smallImgExtraClasses}`} alt="header" />
        <div className="row" style={{ width: '90%' }}>
          <div className="col s24">
            <h2>Serge E. Harb</h2>
          </div>
        </div>
      </header>

      <section id="intro">
        <div className="row">
          <div className="col s24">
            <p>{IntroInfo}</p>
          </div>
        </div>
      </section>
    </div>
  );
}