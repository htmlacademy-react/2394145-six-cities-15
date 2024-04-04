import { AxiosInstance } from 'axios';
import { Comment, CommentData, LoginData, OfferDataType, OffersDataType, User } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { dropToken, saveToken } from '../services/token';
import { favoriteSlice } from './slices/favorite';

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

export const getOffer = createAsyncThunk<OfferDataType, string | undefined, ExtraType>(
  'offers/get-offer',
  async (offerID, {extra: api}) => {
    const {data} = await api.get<OfferDataType>(`/offers/${offerID}`);
    return data;
  }
);

export const getOffersNearby = createAsyncThunk<OffersDataType[], string | undefined, ExtraType>(
  'offers/get-offer-nearby',
  async (offerID, {extra: api}) => {
    const {data} = await api.get<OffersDataType[]>(`/offers/${offerID}/nearby`);
    return data;
  }
);

export const getOfferComments = createAsyncThunk<Comment[], string | undefined, ExtraType>(
  'comments/get-offer-comments',
  async (offerID, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`/comments/${offerID}`);
    return data;
  }
);


export const postOfferComments = createAsyncThunk<Comment, CommentData, ExtraType>(
  'comments/post-offer-comments',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<Comment>(`/comments/${id}`, {comment, rating});
    return data;
  }
);

export const getFavoriteOffers = createAsyncThunk<OffersDataType[], void, ExtraType>(
  'favorite/get-favorite',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersDataType[]>('/favorite');
    dispatch(favoriteSlice.actions.setFavoriteOffers(data));
    return data;
  },
);
