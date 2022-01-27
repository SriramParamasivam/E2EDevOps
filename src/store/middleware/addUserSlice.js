import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const addUserPostDataThunk = createAsyncThunk('addUserService/postData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
      },
    };
    defaultOptions.headers.username = params.name;
    defaultOptions.headers.password = params.password;
    defaultOptions.headers.role = params.role;
    defaultOptions.headers.email = params.email;
    let response = await axios.post('http://localhost:4000/user/management', defaultOptions);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'addUserService',
  initialState: {
    body: {},
    url: null,
    error: null,
    isLoading: false,
    responses: {
      statusCode: '',
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUserPostDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUserPostDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload && action.payload.status;
    });
    builder.addCase(addUserPostDataThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload.response && action.payload.response.status;
    });
  },
});

export const { apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { addUserPostDataThunk };

export default apiSlice.reducer;
