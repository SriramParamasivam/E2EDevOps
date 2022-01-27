import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const usersGetDataThunk = createAsyncThunk('usersHelperService/getData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
      },
    };
    let response = await axios.get('http://localhost:4000/user/management/all', defaultOptions);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'usersHelperService',
  initialState: {
    body: {},
    url: null,
    error: null,
    isLoading: false,
    responses: {
      data: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersGetDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(usersGetDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.data = action.payload.data;
    });
    builder.addCase(usersGetDataThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { usersGetDataThunk };

export default apiSlice.reducer;
