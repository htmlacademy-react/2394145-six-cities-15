import { AxiosInstance } from 'axios';
import { LoginData, OffersDataType, User } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { dropToken, saveToken } from '../services/token';

type ExtraType = {
  extra: AxiosInstance;
}

export const getOffers = createAsyncThunk<OffersDataType[], void, ExtraType>(
  'offers/get-offers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersDataType[]>('/offers');
    dispatch(offersSlice.actions.setOffers(data));
    return data;
  },
);

export const checkAuth = createAsyncThunk<User, undefined, ExtraType>(
  'auth/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<User>('/login');
    return data;
  }
);

export const login = createAsyncThunk<User, LoginData, ExtraType>(
  'auth/login',
  async (body, {extra: api}) => {
    const {data} = await api.post<User>('/login', body);
    saveToken(data.token);
    return data;
  }
);

export const logout = createAsyncThunk<unknown, undefined, ExtraType>(
  'auth/logout',
  async (_, {extra: api}) => {
    await api.delete('/logout');
    dropToken();
  }
);
