import {ObjProps} from '../../ObjProps';
import {useAppDispatch, useAppSelector} from '../../hook';
import {addCart, deleteItem} from '../../store/cartSlice';
import {addFavorites, deleteFavoriteItem} from '../../store/favoriteSlice';
import styles from './Card.module.sass';
import {useEffect, useState} from 'react';

interface SneakersProps {
  item: ObjProps;
}

function Card({item}: SneakersProps) {
  const dispatch = useAppDispatch();

  //all actions with cart
  const [isAdded, setIsAdded] = useState(false);
  const cartData = useAppSelector(state => state.cartReducer);
  const [cartItems, setCartItems] = useState(cartData);
  useEffect(() => {
    setCartItems(cartData);
  }, [cartData]);

  //all actions with favorites
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteData = useAppSelector(state => state.favoriteReducer);
  const [favoriteItems, setFavoriteItems] = useState(favoriteData);
  useEffect(() => {
    setFavoriteItems(favoriteData);
  }, [favoriteData]);
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(addFavorites(item));
    } else {
      dispatch(deleteFavoriteItem({...item}));
    }
  };

  return (
    <>
      <div className={`${styles.itemCard} pt-3 ps-4 pe-4 pb-4`} key={item.id}>
        <img
          src={
            favoriteItems.some(favoriteItem => favoriteItem.id === item.id)
              ? '/img/hearthActive.svg'
              : '/img/hearth.svg'
          }
          alt="hearth"
          className={`${styles.hearthBtn} position-absolute `}
          width={32}
          height={32}
          onClick={onClickFavorite}
        />
        <img
          src={item.image}
          alt="sneakers"
          width={133}
          height={112}
          className="mb-3"
        />
        <p className={`${styles.nameOfItem} fw-normal`}>{item.title}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <span className="text-muted text-uppercase">Цена:</span>
            <b>{item.price} руб.</b>
          </div>
          <button
            className={`${styles.button} d-flex justify-content-center align-items-center`}
            onClick={() => {
              setIsAdded(!isAdded);
              if (isAdded) {
                dispatch(deleteItem({...item}));
              } else {
                dispatch(addCart({...item}));
              }
            }}
          >
            <img
              src={
                cartItems.some(cartItem => cartItem.id === item.id)
                  ? '/img/btnChecked.svg'
                  : '/img/plusBtn.svg'
              }
              width={32}
              height={32}
              alt="plus icon"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
