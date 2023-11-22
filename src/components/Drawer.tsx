import {MouseEventHandler} from 'react';
interface DrawerProps {
  onClose: MouseEventHandler;
}

function Drawer({onClose}: DrawerProps) {
  return (
    <div className="overlay position-absolute">
      <div className="drawer p-4">
        <div
          className="label mb-4 mt-2 d-flex justify-content-between align-items-center"
          onClick={onClose}
        >
          <h4 className="fw-bold ">Корзина</h4>
          <img
            src="/img/deleteBtn.svg"
            alt="delete"
            className="removeBtn closeBtn"
          />
        </div>
        <div className="items">
          <div className="cartItem mb-4">
            <div className="item d-flex align-items-center border p-4  position-relative">
              <img
                src="/img/sneakers/sneakers-1.jpg"
                alt="sneakers"
                width={75}
                height={65}
                className="mb-3"
              />
              <div className="ms-4 itemText">
                <p className="mb-0">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                src="/img/deleteBtn.svg"
                alt="delete"
                className="removeBtn position-absolute"
              />
            </div>
          </div>
          <div className="cartItem mb-4">
            <div className="item d-flex align-items-center border p-4  position-relative">
              <img
                src="/img/sneakers/sneakers-4.jpg"
                alt="sneakers"
                width={75}
                height={65}
                className="mb-3"
              />
              <div className="ms-4 itemText">
                <p className="mb-0">Кроссовки Puma X Aka Boku Future Rider</p>
                <b>8 999 руб.</b>
              </div>
              <img
                src="/img/deleteBtn.svg"
                alt="delete"
                className="removeBtn position-absolute"
              />
            </div>
          </div>
        </div>
        <div className="orderBlock mb-3">
          <ul className="drawerCartBlock p-0">
            <li className="d-flex align-items-center">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex align-items-center">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="buyIt d-flex justify-content-center align-items-center position-relative">
            <span className="fs-6">Оформить заказ</span>
            <img
              src="/img/buyGo.svg"
              alt="buy"
              className="position-absolute"
              width={14}
              height={12}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
