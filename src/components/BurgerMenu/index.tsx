import {Link} from 'react-router-dom';
import styles from './Hamburger.module.sass';
import {MouseEventHandler} from 'react';
import {useAppSelector} from '../../hook';

interface HeaderProps {
  isOpenMenu: boolean;
  onCartOpen: MouseEventHandler;
}

function HamburgerMenu({isOpenMenu, onCartOpen}: HeaderProps) {
  const favoriteItems = useAppSelector(state => state.favoriteReducer);
  const cartItems = useAppSelector(state => state.cartReducer);
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
          <span
            className={`${styles.menuItem} d-flex justify-content-between align-items-center`}
            onClick={onCartOpen}
          >
            Корзина
            {cartItems.length ? (
              <div
                className={`${styles.hamburgerFavoriteCount} d-flex justify-content-center align-items-center`}
              >
                <span>{cartItems.length}</span>
              </div>
            ) : null}
          </span>
        </li>
        <li>
          <Link
            to="/Favorites"
            className={`${styles.menuItem} link-underline link-underline-opacity-0 d-flex justify-content-between align-items-center`}
          >
            Избранные
            {favoriteItems.length ? (
              <div
                className={`${styles.hamburgerFavoriteCount} d-flex justify-content-center align-items-center`}
              >
                <span>{favoriteItems.length}</span>
              </div>
            ) : null}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HamburgerMenu;
