import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const deleteCredentialPostDataThunk = createAsyncThunk('deleteCredentialService/postData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
      },
    };
    defaultOptions.headers.name = params.rowData.name;
    defaultOptions.headers.username = params.rowData.userName;
    defaultOptions.headers.owner = params.rowData.owner;
    defaultOptions.headers.password = params.rowData.token;
    let response = await axios.post('http://localhost:4000/creds/management/delete', defaultOptions);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'deleteCredentialService',
  initialState: {
    body: {},
    url: null,
    error: null,
    isLoading: false,
    responses: {
      statusCode: ''
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteCredentialPostDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCredentialPostDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload && action.payload.status;
    });
    builder.addCase(deleteCredentialPostDataThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { deleteCredentialPostDataThunk };

export default apiSlice.reducer;
