import React, {useState} from 'react';
import Sneakers from '../Sneakers';
import SearchBlock from '../SearchBlock/SearchBlock';
const Home = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <div className="content">
      <div className="d-flex justify-content-between align-items-center mb-5 content-header">
        <h1 className="m-0 fs-2 fw-bold">
          {searchValue ? `Поиск по запросу:` : 'Все кроссовки'}
        </h1>
        <SearchBlock
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <Sneakers searchValue={searchValue} />
    </div>
  );
};

export default Home;
