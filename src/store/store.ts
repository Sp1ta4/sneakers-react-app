import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import allItemsReducer from './allItemsSlice';
import favoriteReducer from './favoriteSlice';
import ordersReducer from './boughtItemsSlice';
export const store = configureStore({
  reducer: {
    cartReducer,
    allItemsReducer,
    favoriteReducer,
    ordersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
