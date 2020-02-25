import './style.scss';

import React from 'react';

import { Experience } from './experience';
import { PersonalInfo } from './personal-info';

export function Content() {
  return (
    <section id="content" className="full row">
      <div className="row">
        <PersonalInfo />
        <Experience />
      </div>
    </section>
  );
}