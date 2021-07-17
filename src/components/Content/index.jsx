import { h } from 'preact';
import cx from 'classnames';
import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Styles from './styles.module.scss';

const Content = () => (
  <section className={cx(Styles.content, 'full row')}>
    <div className="row">
      <PersonalInfo />
      <Experience />
    </div>
  </section>
);

export default Content;
