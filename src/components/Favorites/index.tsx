import React, {useEffect, useState} from 'react';
import styles from './favorites.module.sass';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hook';
import {ObjProps} from '../../ObjProps';
import Card from '../Card';
const Favorites = () => {
  const [favoriteItems, setFavoriteItems] = useState<ObjProps[]>([]);
  const itemsArray = useAppSelector(state => state.favoriteReducer);
  useEffect(() => setFavoriteItems(itemsArray), [itemsArray]);
  return (
    <>
      <div className="content">
        <div
          className={` ${styles.contentHeader} d-flex justify-content-start align-items-center align-middle mb-5`}
        >
          <Link to="/">
            <img src="/img/goBack.png" alt="back" className="btn btn-link" />
          </Link>
          <h1 className="fs-2 fw-bold mb-0 ms-2">Мои закладки</h1>
        </div>

        {favoriteItems.length ? (
          <div className="sneakers d-grid">
            {favoriteItems.map(obj => (
              <Card key={obj.id} item={obj} loading={false} />
            ))}{' '}
          </div>
        ) : (
          <>
            <div
              className={`${styles.emptyFavorite} d-flex flex-column text-center justify-content-center align-items-center`}
            >
              <img
                src="/img/sadSmile.png"
                alt="sad"
                className="mb-4"
                width={70}
                height={70}
              />
              <h3 className=" fw-bold">Закладок нет :)</h3>
              <p className="text-muted">Вы ничего не добавляли в закладки</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Favorites;
