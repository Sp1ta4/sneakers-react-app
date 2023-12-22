import {Link} from 'react-router-dom';
import styles from './Hamburger.module.sass';
import {MouseEventHandler} from 'react';

interface HeaderProps {
  isOpenMenu: boolean;
  onCartOpen: MouseEventHandler;
}

function HamburgerMenu({isOpenMenu, onCartOpen}: HeaderProps) {
  console.log(isOpenMenu);

  return (
    <div
      className={`${styles.hamburgerMenu} position-absolute ${
        isOpenMenu && styles.menuBoxOpened
      }`}
    >
      <ul className={`${styles.menuBox}`}>
        <li>
          <Link
            to="/"
            className={`${styles.menuItem} link-underline link-underline-opacity-0`}
          >
            Главная
          </Link>
        </li>
        <li>
          <span className={`${styles.menuItem}`} onClick={onCartOpen}>
            Корзина
          </span>
        </li>
        <li>
          <Link
            to="/Favorites"
            className={`${styles.menuItem} link-underline link-underline-opacity-0`}
          >
            Избранные
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
