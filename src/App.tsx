import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import {useState} from 'react';
import {ObjProps} from './ObjProps';
const infoArray = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    image: '/img/sneakers/sneakers-3.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/sneakers-1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/sneakers-2.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    image: '/img/sneakers/sneakers-4.jpg',
  },
];
const cartItems: ObjProps[] = [
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/sneakers-1.jpg',
    id: '1',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/sneakers-2.jpg',
    id: '3',
  },
];

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const onDelete = () => {
    console.log('deleted');
  };
  return (
    <div className="wrapper">
      {isCartOpened && (
        <Drawer
          onClose={() => {
            setIsCartOpened(false);
            document.body.style.overflow = 'auto';
          }}
          itemsArray={cartItems}
          onDelete={onDelete}
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
          {infoArray.map(obj => (
            <Card name={obj.title} price={obj.price} image={obj.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
