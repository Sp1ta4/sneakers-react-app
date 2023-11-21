import styles from './Card.module.sass';
import {MouseEventHandler, useState} from 'react';
interface SneakersProps {
  name: string;
  price: number;
  image: string;
  onClickFavorite: MouseEventHandler;
}

function Card({name, price, image, onClickFavorite}: SneakersProps) {
  const [isChecked, setIsChecked] = useState(false);
  const onClickAddBsk = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <div className={`${styles.itemCard} pt-3 ps-4 pe-4 pb-4`}>
        <img
          src="/img/hearth.svg"
          alt="hearth"
          className={`${styles.hearthBtn} position-absolute `}
          width={32}
          height={32}
          onClick={onClickFavorite}
        />
        <img
          src={image}
          alt="sneakers"
          width={133}
          height={112}
          className="mb-3"
        />
        <p className={`${styles.nameOfItem} fw-normal`}>{name}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <span className="text-muted text-uppercase">Цена:</span>
            <b>{price} руб.</b>
          </div>
          <button
            className={`${styles.button} d-flex justify-content-center align-items-center`}
            onClick={onClickAddBsk}
          >
            <img
              src={isChecked ? '/img/btnChecked.svg' : '/img/plusBtn.svg'}
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
