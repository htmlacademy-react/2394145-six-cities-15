import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, LoadingStatus } from '../consts';
import { InitialStateType } from '../types';
import { fetchGet } from './api-action';

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  status: undefined
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGet.pending, (state) => {
        state.status = LoadingStatus.Loading;
      })
      .addCase(fetchGet.fulfilled, (state,action) => {
        state.offers = action.payload;
        state.status = LoadingStatus.Succes;
      });
  }
});


