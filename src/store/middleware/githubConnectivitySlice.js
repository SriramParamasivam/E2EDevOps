import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const axios = require('axios');

const getGithubDataThunk = createAsyncThunk('githubConnectivityService/getData', async (params, { rejectWithValue, getState }) => {
  try {
    const defaultOptions = {
      headers: {
        Authentication: 'sadasfdsjncueisqa',
        repoURL: params.repoURL,
        branch: params.branch,
        selectedCredentialObj: params.selectedCredentialObj.name,
      },
    };
    // let response = await axios.get('http://localhost:4000/github/connectivity', defaultOptions);
    return { status: 201 };
  } catch (err) {
    return rejectWithValue(err);
  }
});

const apiSlice = createSlice({
  name: 'githubConnectivityService',
  initialState: {
    body: {},
    url: null,
    error: null,
    isLoading: false,
    responses: {
      githubVerification: '',
    },
  },
  reducers: {
    invalidateSession(state, action) {
      state.responses.role = '';
      state.responses.verified = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGithubDataThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getGithubDataThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.responses.githubVerification = action.payload.status;
    });
    builder.addCase(getGithubDataThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.responses.githubVerification = action.payload.response && action.payload.response.status;
    });
  },
});

export const { invalidateSession, apiStart, apiDenied, apiError, apiEnd } = apiSlice.actions;
export { getGithubDataThunk };

export default apiSlice.reducer;
