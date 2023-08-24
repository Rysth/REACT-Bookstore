import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApplication = createAsyncThunk(
  'apps/fetchApplication',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/',
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  applicationID: '',
  error: '',
};

export const appsSlice = createSlice({
  name: 'apps',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApplication.fulfilled, (state, action) => {
      const item = localStorage.getItem('applicationID');
      if (!item) {
        localStorage.setItem('applicationID', action.payload);
        state.applicationID = action.payload;
        return;
      }
      state.applicationID = item;
    });
    builder.addCase(fetchApplication.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const appsAction = appsSlice.actions;
