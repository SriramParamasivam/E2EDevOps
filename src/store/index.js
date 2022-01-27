import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loggerMiddleware from './middleware/logger';
import loginReducer from './middleware/loginSlice';
import credentialDataReducer from './middleware/credentialHelperSlice';
import usersDataReducer from './middleware/usersHelperSlice';
import addUserReducer from './middleware/addUserSlice';
import addCredentialReducer from './middleware/addCredentialSlice';
import deleteUserReducer from './middleware/deleteUserSlice';
import deleteCredentialReducer from './middleware/deleteCredentialSlice';
import githubConnectivityReducer from './middleware/githubConnectivitySlice';
import vmAzureBuildReducer from './middleware/vmAzureBuildSlice';

const rootReducer = combineReducers({
  loginService: loginReducer,
  credentialHelperService: credentialDataReducer,
  usersHelperService: usersDataReducer,
  addUserService: addUserReducer,
  addCredentialService: addCredentialReducer,
  deleteUserService: deleteUserReducer,
  deleteCredentialService: deleteCredentialReducer,
  githubConnectivityService: githubConnectivityReducer,
  vmAzureBuildService: vmAzureBuildReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddleware, ...getDefaultMiddleware()],
});
