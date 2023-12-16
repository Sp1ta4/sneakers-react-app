import React from 'react';
import Card from '../Card';
import {ObjProps} from '../../ObjProps';
import {useAppSelector} from '../../hook';

const Sneakers = ({searchValue}: {searchValue: string}) => {
  const itemsArray = useAppSelector(state => state.allItemsReducer);
  return (
    <div className="sneakers d-grid justify-content-center">
      {itemsArray
        .filter((item: ObjProps) =>
          item.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map(obj => (
          <Card key={obj.id} item={obj} loading={false} />
        ))}
    </div>
  );
};

export default Sneakers;
