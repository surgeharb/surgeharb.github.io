import { h } from 'preact';
import { NavItems } from '../../data/nav-items';

const Nav = () => (
  <nav>
    <div className="nav-wrapper">
      <ul id="nav-mobile">
        {NavItems.map((item) => (
          <li className={item.class} key={item.title}>
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
