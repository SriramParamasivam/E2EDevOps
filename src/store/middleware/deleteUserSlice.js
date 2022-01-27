import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const deleteUserPostDataThunk = createAsyncThunk('deleteUserService/postData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
      },
    };
    defaultOptions.headers.username = params.rowData.userName;
    defaultOptions.headers.role = params.rowData.role;
    defaultOptions.headers.email = params.rowData.email;
    let response = await axios.post('http://localhost:4000/user/management/delete', defaultOptions);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'deleteUserService',
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
    builder.addCase(deleteUserPostDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUserPostDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload && action.payload.status;
    });
    builder.addCase(deleteUserPostDataThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.responses.statusCode = action.payload.response && action.payload.response.status;
    });
  },
});

export const { apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { deleteUserPostDataThunk };

export default apiSlice.reducer;
