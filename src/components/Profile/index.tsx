import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './Profile.module.sass';
import {useAppSelector} from '../../hook';
import {ObjProps} from '../../ObjProps';

function Profile() {
  let price: number = 0;
  const [data, setData] = useState<ObjProps[][]>([]);
  const ordersArray = useAppSelector(state => state.ordersReducer);
  useEffect(() => setData(ordersArray), [ordersArray]);
  return (
    <div className="content">
      <div
        className={` ${styles.contentHeader} d-flex justify-content-start align-items-center align-middle mb-5`}
      >
        <Link to="/">
          <img src="/img/goBack.png" alt="back" className="btn btn-link" />
        </Link>
        <h1 className="fs-2 fw-bold mb-0 ms-2">Мой профиль</h1>
      </div>

      {data.length ? (
        <div className={`${styles.mainProfile} d-grid`}>
          {data.map((elem, index) => (
            <div
              className={`${styles.item} rounded border p-3 d-flex flex-column justify-content-between`}
              key={index}
            >
              <div className={`d-flex ${styles.imagesDiv} overflow-hidden`}>
                {elem.map(item => {
                  price += item.price;
                  return (
                    <img
                      className="ms-2"
                      src={item.image}
                      key={item.id}
                      alt="sneakers"
                      width={38}
                      height={32}
                    />
                  );
                })}
              </div>
              <span className="fs-5 fw-bold">Заказ №{index + 1}</span>
              <span className="fs-5 fw-bold">{price} руб.</span>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div
            className={`${styles.emptyProfile} d-flex flex-column text-center justify-content-center align-items-center`}
          >
            <img
              src="/img/empty-profile.png"
              alt="sad"
              className="mb-4"
              width={70}
              height={70}
            />
            <h3 className="fw-bold">У вас нет заказов</h3>
            <p className="text-muted">Оформите хотя бы один заказ</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
