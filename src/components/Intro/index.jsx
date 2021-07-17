import { h } from 'preact';
import cx from 'classnames';
import Styles from './styles.module.scss';
import { IntroInfo } from '../../data/personal';
import useDynamicImage from './useDynamicImage';

const Intro = () => {
  const { smallImgLoaded, largeImgLoaded } = useDynamicImage();

  const headerStyle = largeImgLoaded // set header background once large img loads
    ? { backgroundImage: `url(/assets/images/header_img.jpg)` }
    : {};

  return (
    <div>
      <header className={cx(Styles.placeholder, 'relative', 'z-depth-2')} style={headerStyle}>
        <div className={Styles.largeBackground}></div>
        <img
          src="/assets/images/header_img_s.jpg"
          className={cx(
            Styles.imgSmall,
            smallImgLoaded && Styles.loaded,
            largeImgLoaded && Styles.largeLoaded
          )}
          alt="header"
        />
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
};

export default Intro;
