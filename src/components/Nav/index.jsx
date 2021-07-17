import { h } from 'preact';
import { NavItems } from '../../data/nav-items';
import Styles from './styles.module.scss';

const Nav = () => (
  <nav className={Styles.nav}>
    <div className={Styles.navWrapper}>
      <ul className={Styles.list}>
        {NavItems.map((item) => (
          <li className={Styles[item.class]} key={item.title}>
            <a href={item.pageLink} target={item.target} rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Nav;
