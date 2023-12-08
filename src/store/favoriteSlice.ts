import {createSlice} from '@reduxjs/toolkit';

export interface favoriteState {
  id: string;
  title: string;
  image: string;
  price: number;
}

const initialState: favoriteState[] = [];

export const favoriteSlice = createSlice({
  name: 'favoritesItems',
  initialState,
  reducers: {
    addFavorites(prevState, {payload}) {
      prevState.push({
        id: payload.id,
        title: payload.title,
        image: payload.image,
        price: payload.price,
      });
    },
    deleteFavoriteItem(prevState, {payload}) {
      return prevState.filter(item => item.id !== payload.id);
    },
  },
});

export const {addFavorites, deleteFavoriteItem} = favoriteSlice.actions;

export default favoriteSlice.reducer;
