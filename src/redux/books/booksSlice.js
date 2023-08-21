import { createSlice } from '@reduxjs/toolkit';

const initialState = { books: [] };

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const ID = action.payload;
      state.books = state.books.filter((book) => book.id !== ID);
    },
  },
});

export const booksActions = booksSlice.actions;
