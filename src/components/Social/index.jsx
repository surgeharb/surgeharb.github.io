import { h } from 'preact';
import cx from 'classnames';
import Styles from './styles.module.scss';
import { SocialMedia } from '../../data/social-media';

const icons = {
  linkedin: '/assets/icons/linkedin.svg',
  twitter: '/assets/icons/twitter.svg',
  github: '/assets/icons/github.svg',
};

const Social = () => (
  <section className={Styles.social}>
    <div className="row">
      {SocialMedia.map((social) => (
        <div className={cx(Styles.socialColumn, 'col s24 l8')} key={social.name}>
          <div className={Styles.PulseContent}>
            <a href={social.link} target="_blank" rel="noopener noreferrer">
              <img src={icons[social.name]} alt="f" width="48" height="48" color="white" />
            </a>
          </div>
          <a href={social.link} target="_blank" rel="noopener noreferrer">
            {social.link}
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Social;
