import './style.scss';

import React from 'react';

import { Contact } from '../../data/personal';

import EmailOutlineIcon from '../../assets/icons/email-outline.svg';

export function Footer() {
  const { email, address } = Contact;

  return (
    <footer>
      <p>
        <span>{address}</span>
        <a href={`mailto:${email}`}>
          <img src={EmailOutlineIcon} width="24" height="24" alt="o"/>
          <span className="email">{email}</span>
        </a>
      </p>
    </footer>
  );
}