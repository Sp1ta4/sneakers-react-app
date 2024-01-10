import React, {useEffect, useState} from 'react';
import Card from '../Card';
import {ObjProps} from '../../ObjProps';
import {useAppSelector} from '../../hook';
import {allItemsState} from '../../store/allItemsSlice';
import {Pagination} from '@mui/material';

const Sneakers = ({searchValue}: {searchValue: string}) => {
  const itemsArray = useAppSelector(state => state.allItemsReducer);
  const [pageItems, setPageItems] = useState<allItemsState[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const maxItemsPerPage = 12;
  const start = (currentPage - 1) * maxItemsPerPage;
  const end = start + maxItemsPerPage;
  useEffect(() => setPageItems(itemsArray.slice(start, end)), [currentPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="sneakers d-grid justify-content-center">
        {pageItems
          .filter((item: ObjProps) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
          )
          .map(obj => (
            <Card key={obj.id} item={obj} loading={false} />
          ))}
      </div>
      {itemsArray.length > maxItemsPerPage && (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <Pagination
                count={Math.ceil(itemsArray.length / maxItemsPerPage)}
                shape="rounded"
                onChange={(event, value) => paginate(value)}
                size="large"
                className="mt-5 mb-3"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sneakers;
