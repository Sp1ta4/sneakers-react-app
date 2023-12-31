import {createSlice} from '@reduxjs/toolkit';

export interface allItemsState {
  id: string;
  title: string;
  image: string;
  price: number;
}

const initialState: allItemsState[] = [
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
  {
    id: '13',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    image: '/img/sneakers/sneakers-3.jpg',
  },
  {
    id: '14',
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    image: '/img/sneakers/sneakers-1.jpg',
  },
  {
    id: '15',
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    image: '/img/sneakers/sneakers-2.jpg',
  },
  {
    id: '16',
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    image: '/img/sneakers/sneakers-4.jpg',
  },
  {
    id: '17',
    title: 'Мужские Кроссовки Under Armour Curry 8',
    price: 15199,
    image: '/img/sneakers/sneakers-5.jpg',
  },
  {
    id: '18',
    title: 'Мужские Кроссовки Nike Kyrie 7',
    price: 11299,
    image: '/img/sneakers/sneakers-10.jpg',
  },
  {
    id: '19',
    title: 'Мужские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    image: '/img/sneakers/sneakers-9.jpg',
  },
  {
    id: '20',
    title: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    image: '/img/sneakers/sneakers-8.jpg',
  },
];

export const allItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {},
});

export default allItemsSlice.reducer;
