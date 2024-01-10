import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {ordersState} from '../../store/boughtItemsSlice';
import {useAppSelector} from '../../hook';
import Card from '../Card';
import styles from './Order.module.sass';
function Order() {
  const {id} = useParams<{id?: string}>();
  const index = +id!;
  const orders = useAppSelector(state => state.ordersReducer);
  const [ordersArray, setOrder] = useState<ordersState[][]>([]);
  useEffect(() => {
    setOrder(orders);
    console.log(ordersArray);
  }, [orders]);
  return (
    <div className={`${styles.sneakers} d-grid p-5`}>
      {ordersArray.length &&
        ordersArray[index - 1].map((elem, index) => (
          <Card item={elem} loading={false} key={index} />
        ))}
    </div>
  );
}
export default Order;
