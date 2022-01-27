import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const postVMAzureBuildDataThunk = createAsyncThunk('vmAzureBuildService/getData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
        hostName: params.hostName,
        azureBuildType: params.azureBuildType,
        azureBuildDisk: params.azureBuildDisk,
      },
    };
    let response = await axios.get('http://localhost:4000/', defaultOptions);
    return response;
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'vmAzureBuildService',
  initialState: {
    body: {},
    url: null,
    error: null,
    isLoading: false,
    responses: {
      vmAzureBuildStatus: '',
    },
  },
  reducers: {
    invalidateSession(state, action) {
      state.responses.role = '';
      state.responses.verified = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postVMAzureBuildDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(postVMAzureBuildDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.vmAzureBuildStatus = action.payload.status;
    });
    builder.addCase(postVMAzureBuildDataThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.responses.vmAzureBuildStatus = action.payload.response && action.payload.response.status;
    });
  },
});

export const { invalidateSession, apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { postVMAzureBuildDataThunk };

export default apiSlice.reducer;
