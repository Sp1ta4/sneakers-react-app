import {ObjProps} from '../../ObjProps';
import {useAppDispatch, useAppSelector} from '../../hook';
import {addCart, deleteItem} from '../../store/cartSlice';
import {addFavorites, deleteFavoriteItem} from '../../store/favoriteSlice';
import styles from './Card.module.sass';
import {useEffect, useState} from 'react';
import ContentLoader from 'react-content-loader';
interface SneakersProps {
  item: ObjProps;
  loading: boolean;
}

function Card({item, loading}: SneakersProps) {
  const dispatch = useAppDispatch();

  //All actions with cart
  const cartData = useAppSelector(state => state.cartReducer);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(cartData.some(cartItem => cartItem.id === item.id));
  }, [cartData, item.id]);

  // All actions with favorites
  const favoriteData = useAppSelector(state => state.favoriteReducer);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteData.some(cartItem => cartItem.id === item.id));
  }, [favoriteData, item.id]);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      dispatch(deleteFavoriteItem(item));
    } else {
      dispatch(addFavorites({...item}));
    }
  };

  return (
    <>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={260}
          viewBox="0 0 210 260"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="455" y="526" rx="2" ry="2" width="140" height="10" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="160" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="153" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div className={`${styles.itemCard} pt-3 ps-4 pe-4`} key={item.id}>
          <img
            src={isFavorite ? '/img/hearthActive.svg' : '/img/hearth.svg'}
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
            className={`mb-3 ${styles.sneakersImage} ms-3`}
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
                src={isAdded ? '/img/btnChecked.svg' : '/img/plusBtn.svg'}
                width={32}
                height={32}
                alt="plus icon"
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
