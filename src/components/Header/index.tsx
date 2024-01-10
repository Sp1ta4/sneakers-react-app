import {Link, NavLink} from 'react-router-dom';
import styles from './Header.module.sass';
import {Dispatch, MouseEventHandler, SetStateAction} from 'react';
import {useAppSelector} from '../../hook';
import Hamburger from 'hamburger-react';
interface HeaderProps {
  onCartOpen: MouseEventHandler;
  isOpenMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

function Header({onCartOpen, setOpenMenu, isOpenMenu}: HeaderProps) {
  const cartAllPrice = useAppSelector(state => state.cartReducer);
  const cartPrice = cartAllPrice.reduce(
    (prev, nex): {price: number} => ({price: prev.price + nex.price}),
    {price: 0},
  );
  const favoriteItems = useAppSelector(state => state.favoriteReducer);
  const cartItems = useAppSelector(state => state.cartReducer);
  return (
    <header className="d-flex justify-content-between align-items-center">
      <Link to="/" className="link-underline link-underline-opacity-0">
        <div className={`${styles.headerLeft} d-flex align-items-center`}>
          <img
            width={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
            className="me-4"
          />
          <div className="headerMainText">
            <h3 className="m-0 text-uppercase storeNameText fw-bold">
              React Sneakers
            </h3>
            <p className="m-0 text-muted fs-6 fw-normal">
              Магазин лучших кроссовок
            </p>
          </div>
        </div>
      </Link>
      <ul
        className={`${styles.headerRight} d-flex justify-content-between align-items-center`}
      >
        <li
          className="list-group-item me-4 btn d-flex justify-content-between align-items-center"
          onClick={onCartOpen}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img
              width={18}
              height={18}
              src="/img/cart.svg"
              alt="cart"
              className="me-2"
            />
            {cartItems.length ? (
              <div
                className={`${styles.cartCount} favoriteCount position-absolute d-flex justify-content-center align-items-center`}
              >
                <span>{cartItems.length}</span>
              </div>
            ) : null}
          </div>
          <span className="text-muted fs-6">{cartPrice.price} руб.</span>
        </li>
        <li className="list-group-item me-4 position-relative">
          <NavLink
            to="/Favorites"
            className={({isActive}) =>
              isActive
                ? `link-underline link-underline-opacity-0 p-1 ${styles.active}`
                : 'link-underline link-underline-opacity-0 p-1'
            }
          >
            <img
              width={18}
              height={18}
              src="/img/liked.svg"
              alt="cart"
              className="me-2"
            />
            {favoriteItems.length ? (
              <div
                className={`${styles.favoriteCount} favoriteCount position-absolute d-flex justify-content-center align-items-center`}
              >
                <span>{favoriteItems.length}</span>
              </div>
            ) : null}
            <span className="text-muted fs-6">Закладки</span>
          </NavLink>
        </li>
        <li className="list-group-item">
          <NavLink
            to="/Profile"
            className={({isActive}) =>
              isActive
                ? `link-underline link-underline-opacity-0 p-1 ${styles.active}`
                : 'link-underline link-underline-opacity-0 p-1'
            }
          >
            <img
              width={18}
              height={18}
              src="/img/user.svg"
              alt="logo"
              className="me-2"
            />
            <span className="text-muted fs-6">Профиль</span>
          </NavLink>
        </li>
      </ul>
      <div className={`${styles.hMenuBtn} p-0`}>
        <Hamburger color="#8ED6FF" toggled={isOpenMenu} toggle={setOpenMenu} />
      </div>
    </header>
  );
}

export default Header;
