import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import {useState} from 'react';
import {ObjProps} from './ObjProps';
const itemsArray = [
  {
    id: '1',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    image: '/img/sneakers/sneakers-3.jpg',
  },
  {
    id: '2',
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/sneakers-1.jpg',
  },
  {
    id: '3',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/sneakers-2.jpg',
  },
  {
    id: '4',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    image: '/img/sneakers/sneakers-4.jpg',
  },
  {
    id: '5',
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    image: '/img/sneakers/sneakers-5.jpg',
  },
  {
    id: '6',
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    image: '/img/sneakers/sneakers-10.jpg',
  },
  {
    id: '7',
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    image: '/img/sneakers/sneakers-9.jpg',
  },
  {
    id: '8',
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    image: '/img/sneakers/sneakers-8.jpg',
  },
  {
    id: '9',
    title: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    image: '/img/sneakers/sneakers-7.jpg',
  },
  {
    id: '10',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/sneakers-3.jpg',
  },
  {
    id: '11',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    image: '/img/sneakers/sneakers-4.jpg',
  },
  {
    id: '12',
    title: 'Мужские Кроссовки Nike Kyrie Flytrap IV',
    price: 12999,
    image: '/img/sneakers/sneakers-6.jpg',
  },
];

function App() {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState<ObjProps[]>([]);
  const onDelete = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  const renderCartItems = (isAdded: boolean, obj: ObjProps) => {
    if (!isAdded) {
      setCartItems([...cartItems, obj]);
    } else {
      setCartItems(cartItems.filter(item => item.id !== obj.id));
    }
    console.log(cartItems);
  };
  const [searchValue, setSearchValue] = useState<string>('');
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
        <div className="sneakers d-grid">
          {itemsArray
            .filter((item: ObjProps) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase()),
            )
            .map(obj => (
              <Card key={obj.id} item={obj} renderCartItems={renderCartItems} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
