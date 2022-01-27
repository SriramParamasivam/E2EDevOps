import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const getDataThunk = createAsyncThunk('loginService/getData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
        username: params.username,
        password: params.password,
      },
    };
    // let response = await axios.get('http://localhost:4000/check/', defaultOptions);
    return {
      data: {
        verified: 'yes',
        role: 'admin',
        userName: 'Brothers'
      }
    };
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'loginService',
  initialState: {
    body: {},
    url: null,
    error: null,
    isLoading: false,
    responses: {
      verified: '',
      role: '',
      userName: ''
    },
  },
  reducers: {
    invalidateSession(state, action) {
      state.responses.role = '';
      state.responses.verified = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.role = action.payload.data.role;
      state.responses.verified = action.payload.data.verified;
      state.responses.userName = action.payload.data.userName;
    });
    builder.addCase(getDataThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { invalidateSession, apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { getDataThunk };

export default apiSlice.reducer;
