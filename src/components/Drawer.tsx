import {MouseEventHandler} from 'react';
import {ObjProps} from '../ObjProps';
interface DrawerProps {
  onClose: MouseEventHandler;
  itemsArray: ObjProps[];
  onDelete: Function;
}

function Drawer({onClose, itemsArray, onDelete}: DrawerProps) {
  let price: number = 0;
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
        <div
          className={
            (!itemsArray.length &&
              'd-flex flex-column justify-content-center align-items-between') ||
            'items'
          }
        >
          <>
            {itemsArray.length ? (
              itemsArray.map((obj: ObjProps) => {
                price += obj.price;
                return (
                  <div className="cartItem mb-4" key={obj.id}>
                    <div className="item d-flex align-items-center border p-4  position-relative">
                      <img
                        src={obj.image}
                        alt="sneakers"
                        width={75}
                        height={65}
                        className="mb-3"
                      />
                      <div className="ms-4 itemText">
                        <p className="mb-0">{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img
                        src="/img/deleteBtn.svg"
                        alt="delete"
                        className="removeBtn position-absolute"
                        onClick={() => onDelete(obj.id)}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="/img/emptyCart.png"
                    alt="empty"
                    width={120}
                    height={120}
                  />
                  <b className="fs-0 mb-1 mt-2">Корзина пустая</b>
                  <p className="fs-6 text-muted text-center">
                    Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                  </p>
                </div>
              </>
            )}
          </>
        </div>
        <div className="orderBlock mb-3">
          <ul className="drawerCartBlock p-0">
            <li className="d-flex align-items-center">
              <span>Итого:</span>
              <div></div>
              <b>{`${price} руб.`}</b>
            </li>
            <li className="d-flex align-items-center">
              <span>Налог 5%:</span>
              <div></div>
              <b>{`${(price * 5) / 100} руб.`}</b>
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
