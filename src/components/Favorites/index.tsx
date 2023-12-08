import React from 'react';
import styles from './favorites.module.sass';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hook';
import Card from '../Card';
const Favorites = () => {
  const itemsArray = useAppSelector(state => state.favoriteReducer);
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

        <div className="sneakers d-grid">
          {itemsArray.map(obj => (
            <Card key={obj.id} item={obj} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
