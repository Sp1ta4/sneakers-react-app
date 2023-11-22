import {MouseEventHandler} from 'react';

interface HeaderProps {
  onCartOpen: MouseEventHandler;
}
function Header({onCartOpen}: HeaderProps) {
  return (
    <header className="d-flex justify-content-between align-items-center p-5">
      <div className="headerLeft d-flex align-items-center">
        <img
          width={40}
          height={40}
          src="/img/logo.png"
          alt="logo"
          className="me-4"
        />
        <div>
          <h3 className="m-0 text-uppercase fw-bold fs-5">React Sneakers</h3>
          <p className="m-0 text-muted fs-6 fw-normal">
            Магазин лучших кроссовок
          </p>
        </div>
      </div>
      <ul className="headerRight d-flex justify-content-between align-items-center">
        <li className="list-group-item me-4 btn" onClick={onCartOpen}>
          <img
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="cart"
            className="me-2"
          />
          <span className="text-muted fs-6">1205 руб.</span>
        </li>
        <li className="list-group-item me-4">
          <img
            width={18}
            height={18}
            src="/img/liked.svg"
            alt="cart"
            className="me-2"
          />
          <span className="text-muted fs-6">Закладки</span>
        </li>
        <li className="list-group-item">
          <img
            width={18}
            height={18}
            src="/img/user.svg"
            alt="logo"
            className="me-2"
          />
          <span className="text-muted fs-6">Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
