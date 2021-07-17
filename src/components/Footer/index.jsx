import { h } from 'preact';
import Styles from './styles.module.scss';
import { Contact } from '../../data/personal';

const Footer = () => (
  <footer className={Styles.footer}>
    <p>
      <span>{Contact.address}</span>
      <a href={`mailto:${Contact.email}`}>
        <img src="/assets/icons/email-outline.svg" width="24" height="24" alt="o" />
        <span className={Styles.email}>{Contact.email}</span>
      </a>
    </p>
  </footer>
);

export default Footer;
