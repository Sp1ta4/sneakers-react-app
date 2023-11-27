import {ObjProps} from '../../ObjProps';
import styles from './Card.module.sass';
import {useState} from 'react';
interface SneakersProps {
  item: ObjProps;
  renderCartItems: (isAdded: boolean, obj: ObjProps) => void;
}

function Card({item, renderCartItems}: SneakersProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const onClickAddBsk = () => {
    renderCartItems(isAdded, item);
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <>
      <div className={`${styles.itemCard} pt-3 ps-4 pe-4 pb-4`} key={item.id}>
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
            onClick={onClickAddBsk}
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
    </>
  );
}

export default Card;
