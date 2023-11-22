import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import {useEffect, useState} from 'react';

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://655e4bc49f1e1093c59addc4.mockapi.io/items')
      .then(data => data.json())
      .then(data => setItems(data));
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
          <h1 className="m-0 fs-2 fw-bold">Все кроссовки</h1>
          <div className="search-block border  d-flex justify-content-start align-items-center ps-3 pe-3 p-2">
            <img src="/img/search.svg" alt="search" width={15} height={15} />
            <input
              type="text"
              placeholder="Поиск..."
              className="fs-6 fw-normal ps-3 pe-3"
            />
          </div>
        </div>
        <div className="sneakers d-grid">
          {items.map((obj: {price: number; title: string; image: string}) => (
            <Card
              name={obj.title}
              price={obj.price}
              image={obj.image}
              renderCart={() => {
                const arr: any = [...cartItems, obj];
                setCartItems(arr);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
