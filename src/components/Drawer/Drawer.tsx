import {MouseEventHandler, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hook';
import {clearCart, deleteItem} from '../../store/cartSlice';
import styles from './Drawer.module.sass';
import {addOrder} from '../../store/boughtItemsSlice';
import {ObjProps} from '../../ObjProps';
interface DrawerProps {
  onClose: MouseEventHandler;
  isCartOpened: boolean;
}

function Drawer({onClose, isCartOpened}: DrawerProps) {
  let price: number = 0;
  const [isOrderProcessed, setIsOrderProcessed] = useState(false);
  const dispatch = useAppDispatch();

  const cartData = useAppSelector(state => state.cartReducer);
  const [cartItems, setCartItems] = useState(cartData);
  useEffect(() => {
    setCartItems(cartData);
  }, [cartData]);

  const ordersData = useAppSelector(state => state.ordersReducer);
  const [orders, setOrders] = useState(ordersData);
  useEffect(() => {
    setOrders(ordersData);
  }, [ordersData]);

  function doOrder(cartItems: ObjProps[]) {
    dispatch(addOrder(cartItems));
    dispatch(clearCart());
    setIsOrderProcessed(true);
    setTimeout(() => setIsOrderProcessed(false), 3000);
  }

  return (
    <div
      className={`${styles.overlay} position-absolute ${
        isCartOpened && styles.overlayOpened
      }`}
    >
      <div className={`${styles.drawer} p-4`}>
        <div
          className={`${styles.label} mb-4 mt-2 d-flex justify-content-between align-items-center`}
          onClick={onClose}
        >
          <h4 className="fw-bold">Корзина</h4>
          <img
            src="/img/deleteBtn.svg"
            alt="delete"
            className={`${styles.removeBtn} ${styles.closeBtn}`}
          />
        </div>
        <div
          className={
            (!cartItems.length &&
              'd-flex flex-column justify-content-center align-items-between') ||
            `${styles.items}`
          }
        >
          <>
            {isOrderProcessed ? (
              <>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <img
                    src="/img/youBuyIcon.svg"
                    alt="empty"
                    width={120}
                    height={120}
                  />
                  <b className="fs-0 mb-1 mt-2">Заказ оформлен!</b>
                  <p className="fs-6 text-muted text-center">
                    Ваш заказ #{orders.length} скоро будет передан курьерской
                    доставке
                  </p>
                  <div className={`${styles.overlayLoad} w-100 border rounded`}>
                    <div className={`${styles.loadFill} rounded h-100`}></div>
                  </div>
                </div>
              </>
            ) : cartItems.length ? (
              cartItems.map(obj => {
                price += obj.price;
                return (
                  <div className={`${styles.cartItem} mb-4`} key={obj.id}>
                    <div
                      className={`${styles.item} d-flex align-items-center border p-4  position-relative`}
                    >
                      <img
                        src={obj.image}
                        alt="sneakers"
                        width={75}
                        height={65}
                        className="mb-3"
                      />
                      <div className={`ms-4 ${styles.itemText}`}>
                        <p className="mb-0">{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img
                        src="/img/deleteBtn.svg"
                        alt="delete"
                        className={`${styles.removeBtn} position-absolute`}
                        onClick={() => dispatch(deleteItem(obj))}
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
        <div className={`${styles.orderBlock} mb-3`}>
          <ul className={`${styles.drawerCartBlock} p-0`}>
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
          <button
            className={`${styles.buyIt} ${
              cartItems.length && styles.buyBtnActive
            } d-flex justify-content-center align-items-center position-relative`}
            onClick={() => cartItems.length && doOrder(cartItems)}
          >
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
