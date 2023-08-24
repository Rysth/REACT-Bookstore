import { configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './books/booksSlice';
import { categoriesSlice } from './categories/categoriesSlice';
import { appsSlice } from './apps/appsSlice';

const store = configureStore({
  reducer: {
    apps: appsSlice.reducer,
    books: booksSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

export default store;
