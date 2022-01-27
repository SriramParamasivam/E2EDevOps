import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const credentialGetDataThunk = createAsyncThunk('credentialHelperService/getData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
      },
    };
    // let response = await axios.get('http://localhost:4000/creds/management/all', defaultOptions);
    return { data: [{ name: 'Github' }, { name: 'Github2' }, { name: 'Github3' }] };
  } catch (err) {
    return rejectWithValue(err);
  }
});

const hidePassword = (data) => {
  data.forEach((credential) => {
    credential.token = '**********';
  });
  return data;
};

const apiSlice = createSlice({
  name: 'credentialHelperService',
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
    builder.addCase(credentialGetDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(credentialGetDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.actualData = action.payload.data;
      state.responses.data = hidePassword(action.payload.data);
    });
    builder.addCase(credentialGetDataThunk.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { credentialGetDataThunk };

export default apiSlice.reducer;
