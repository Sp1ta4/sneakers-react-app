import React, {MouseEventHandler} from 'react';
import {IconContext} from 'react-icons';
import {TbPlayerTrackNext, TbPlayerTrackPrev} from 'react-icons/tb';
import {allItemsState} from '../../store/allItemsSlice';

type PaginationProps = {
  data: allItemsState[];
  pageMaxTasksCount: number;
  handleClick: (a1: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  data,
  pageMaxTasksCount,
  handleClick,
}: PaginationProps) => {
  const pagesCount = [];
  for (let i = 1; i <= Math.ceil(data.length / pageMaxTasksCount); i++) {
    pagesCount.push(i);
  }
  return (
    <>
      <nav aria-label="Page navigation example" className="mt-5">
        <ul className="pagination d-flex justify-content-center align-items-center">
          <li className="page-item d-flex justify-content-center align-items-center me-1">
            <button
              className="btn btn-link page-link ps-3 pe-3 p-1 fs-5 border-0"
              aria-label="Previous"
            >
              <span aria-hidden="true">
                <IconContext.Provider value={{className: 'mb-1', size: '.9em'}}>
                  <TbPlayerTrackPrev />
                </IconContext.Provider>
              </span>
            </button>
          </li>
          {pagesCount.map(number => {
            return (
              <li
                className={
                  number === 1
                    ? 'page-item d-flex justify-content-center align-items-center'
                    : 'page-item d-flex justify-content-center align-items-center ms-1'
                }
                key={number}
                onClick={() => handleClick(number)}
              >
                <button className="btn btn-link page-link ps-3 pe-3 p-1 fs-5">
                  {number}
                </button>
              </li>
            );
          })}
          <li className="page-item d-flex justify-content-center align-items-center ms-1">
            <button
              className="btn btn-link page-link ps-3 pe-3 p-1 fs-5 border-0"
              aria-label="Next"
            >
              <span aria-hidden="true">
                <IconContext.Provider value={{className: 'mb-1', size: '.9em'}}>
                  <TbPlayerTrackNext />
                </IconContext.Provider>
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
