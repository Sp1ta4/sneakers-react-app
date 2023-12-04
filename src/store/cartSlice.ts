import {createSlice} from '@reduxjs/toolkit';

export interface cartState {
  id: string;
  title: string;
  image: string;
  price: number;
}

const initialState: cartState[] = [];

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCart(prevState, {payload}) {
      prevState.push({
        id: payload.id,
        title: payload.title,
        image: payload.image,
        price: payload.price,
      });
    },
    deleteItem(prevState, {payload}) {
      return prevState.filter(item => item.id !== payload.id);
    },
  },
});

export const {addCart, deleteItem} = cartSlice.actions;

export default cartSlice.reducer;
