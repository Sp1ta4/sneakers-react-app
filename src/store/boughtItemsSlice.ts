import {createSlice} from '@reduxjs/toolkit';

export interface ordersState {
  id: string;
  title: string;
  image: string;
  price: number;
}
const initialState: ordersState[][] = [];
export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(prevState, action) {
      prevState.push(action.payload);
    },
  },
});

export const {addOrder} = ordersSlice.actions;

export default ordersSlice.reducer;
