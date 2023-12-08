import React, {useState} from 'react';
import Sneakers from '../Sneakers';
const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className="content">
      <div className="d-flex justify-content-between align-items-center mb-5 content-header">
        <h1 className="m-0 fs-2 fw-bold">
          {searchValue ? `Поиск по запросу:` : 'Все кроссовки'}
        </h1>
        <div className="search-block border d-flex justify-content-between align-items-center ps-3 pe-3 p-2 position-relative">
          <div>
            <img src="/img/search.svg" alt="search" width={15} height={15} />
            <input
              type="text"
              placeholder="Поиск..."
              className="fs-6 fw-normal ps-3 pe-3"
              value={searchValue}
              onInput={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setSearchValue((event.target as HTMLInputElement).value);
              }}
            />
          </div>
          {searchValue && (
            <img
              className="btnDel position-absolute"
              src="/img/inputDelete.svg"
              alt="delete"
              width={14}
              height={14}
              onClick={() => setSearchValue('')}
            />
          )}
        </div>
      </div>
      <Sneakers searchValue={searchValue} />
    </div>
  );
};

export default Home;
