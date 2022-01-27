import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const addCredentialPostDataThunk = createAsyncThunk('addCredentialService/postData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
      },
    };
    defaultOptions.headers.name = params.name;
    defaultOptions.headers.username = params.username;
    defaultOptions.headers.owner = params.owner;
    defaultOptions.headers.password = params.password;
    let response = await axios.post('http://localhost:4000/creds/management/one', defaultOptions);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'addCredentialService',
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
    builder.addCase(addCredentialPostDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addCredentialPostDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload && action.payload.status;
    });
    builder.addCase(addCredentialPostDataThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload.response && action.payload.response.status;
    });
  },
});

export const { apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { addCredentialPostDataThunk };

export default apiSlice.reducer;
