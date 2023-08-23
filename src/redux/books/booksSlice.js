import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (applicationID, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${applicationID}/books`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  books: [],
  error: '',
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
      };
      state.books.push(newBook);
    },
    removeBook: (state, action) => {
      const ID = action.payload;
      state.books = state.books.filter((book) => book.item_id !== ID);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const booksActions = booksSlice.actions;
