import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, LoadingStatus } from '../../consts';
import { User, UserInitialStateType } from '../../types';
import { checkAuth, login, logout } from '../api-action';

const initialState: UserInitialStateType = {
  user: null,
  requestStatus: undefined,
  status: AuthorizationStatus.Unknown
};

function processSuccess(state: UserInitialStateType, action: PayloadAction<User>) {
  state.user = action.payload;
  state.status = AuthorizationStatus.Auth;
  state.requestStatus = LoadingStatus.Succes;
}

function processFailed(state: UserInitialStateType) {
  state.requestStatus = LoadingStatus.Reject;
  state.status = AuthorizationStatus.NoAuth;
}

function processLoading(state: UserInitialStateType) {
  state.requestStatus = LoadingStatus.Loading;
}

export const userSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, processSuccess);
    builder.addCase(checkAuth.rejected, processFailed);
    builder.addCase(checkAuth.pending, processLoading);
    builder.addCase(login.fulfilled, processSuccess);
    builder.addCase(login.rejected, processFailed);
    builder.addCase(login.pending, processLoading);
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.status = AuthorizationStatus.NoAuth;
    });
  },
  initialState,
  name: 'user',
  reducers: {},
});

