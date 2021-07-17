import { h } from 'preact';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';

const Content = () => (
  <section id="content" className="full row">
    <div className="row">
      <PersonalInfo />
      <Experience />
    </div>
  </section>
);

export default Content;
