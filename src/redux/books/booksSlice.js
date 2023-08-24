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

export const sendNewBook = createAsyncThunk(
  'books/sendNewBook',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${payload.applicationID}/books`,
        payload.bookObject,
      );
      if (!response) {
        return Error('Not possible to send a new book.');
      }
      return payload.bookObject;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${payload.applicationID}/books/${payload.itemID}`,
      );
      if (!response) {
        return Error('Not possible to remove the book.');
      }
      return payload.itemID;
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
    builder.addCase(sendNewBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    });
  },
});

export const booksActions = booksSlice.actions;
