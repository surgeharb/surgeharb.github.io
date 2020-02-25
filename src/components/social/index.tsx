import './style.scss';

import React from 'react';

import { SocialMedia } from '../../data/social-media';

import GitHubIcon from '../../assets/icons/github.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import LinkedInIcon from '../../assets/icons/linkedin.svg';

export function Social() {
  const icons: any = {
    facebook: FacebookIcon,
    linkedin: LinkedInIcon,
    github: GitHubIcon,
  };

  return (
    <section id="social">
      <div className="row">
        {
          SocialMedia.map(social => (
            <div className="col s24 l8" key={social.name}>
              <div>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img src={icons[social.name]} alt="f" width="48" height="48" color="white" />
                </a>
              </div>
              <a href={social.link} target="_blank" rel="noopener noreferrer">{social.link}</a>
            </div>
          ))
        }
      </div>
    </section>
  );
}