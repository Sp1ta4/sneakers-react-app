import React, {ChangeEvent, FC} from 'react';

interface SearchBlockProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBlock: FC<SearchBlockProps> = ({searchValue, setSearchValue}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const handleDeleteClick = (): void => {
    setSearchValue('');
  };

  return (
    <div className="search-block border d-flex justify-content-between align-items-center ps-3 pe-3 p-2 position-relative">
      <div>
        <img src="/img/search.svg" alt="search" width={15} height={15} />
        <input
          type="text"
          placeholder="Поиск..."
          className="fs-6 fw-normal ps-3 pe-3"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
      {searchValue && (
        <img
          className="btnDel position-absolute"
          src="/img/inputDelete.svg"
          alt="delete"
          width={14}
          height={14}
          onClick={handleDeleteClick}
        />
      )}
    </div>
  );
};

export default SearchBlock;
