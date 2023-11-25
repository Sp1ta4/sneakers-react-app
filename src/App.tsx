import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import axios from 'axios';
import {useEffect, useState} from 'react';

type ObjProps = {
  title: string;
  price: number;
  image: string;
  id: string;
};
function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState<ObjProps[]>([]);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  useEffect(() => {
    axios
      .get('https://655e4bc49f1e1093c59addc4.mockapi.io/items')
      .then(res => setItems(res.data));
    axios
      .get('https://655e4bc49f1e1093c59addc4.mockapi.io/cart')
      .then(res => setCartItems(res.data));
  }, []);

  return (
    <div className="wrapper">
      {isCartOpened && (
        <Drawer
          onClose={() => {
            setIsCartOpened(false);
            document.body.style.overflow = 'auto';
          }}
          itemsArray={cartItems}
          onDelete={async (id: string) => {
            await axios
              .delete(`https://655e4bc49f1e1093c59addc4.mockapi.io/cart/${id}`)
              .catch(err => console.error(err));
            setCartItems(prev => prev.filter(item => item.id !== id));
          }}
        />
      )}
      <Header
        onCartOpen={() => {
          setIsCartOpened(true);
          document.body.style.overflow = 'hidden';
        }}
      />
      <div className="content">
        <div className="d-flex justify-content-between align-items-center  mb-5">
          <h1 className="m-0 fs-2 fw-bold">
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="search-block border  d-flex justify-content-start align-items-center ps-3 pe-3 p-2">
            <img src="/img/search.svg" alt="search" width={15} height={15} />

            <input
              maxLength={45}
              type="text"
              placeholder="Поиск..."
              className="fs-6 fw-normal ps-3 pe-3"
              value={searchValue}
              onInput={(event: React.ChangeEvent<HTMLInputElement>): void => {
                setSearchValue((event.target as HTMLInputElement).value);
              }}
            />

            {searchValue && (
              <img
                className="btnDel"
                src="/img/inputDelete.svg"
                alt="delete"
                width={14}
                height={14}
                onClick={() => setSearchValue('')}
              />
            )}
          </div>
        </div>
        <div className="sneakers d-grid">
          {items
            .filter((item: ObjProps) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map((obj: ObjProps) => (
              <Card
                key={obj.id}
                name={obj.title}
                price={obj.price}
                image={obj.image}
                renderCart={(isAdded: boolean): void => {
                  if (!isAdded) {
                    axios.post(
                      'https://655e4bc49f1e1093c59addc4.mockapi.io/cart',
                      obj,
                    );
                    setCartItems([...cartItems, obj]);
                  } else {
                    axios.delete(
                      `https://655e4bc49f1e1093c59addc4.mockapi.io/cart/${obj.id}`,
                    );
                    setCartItems(prev =>
                      prev.filter(item => item.id !== obj.id),
                    );
                  }
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
