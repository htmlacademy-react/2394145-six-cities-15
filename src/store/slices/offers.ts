import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DEFAULT_CITY, LoadingStatus } from '../../consts';
import { OffersInitialStateType, OffersDataType } from '../../types';
import { getOffers } from '../api-action';

const initialState: OffersInitialStateType = {
  city: DEFAULT_CITY,
  offers: [],
  loadingStatus: undefined,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<OffersDataType[]>) => {
      state.offers = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffers.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(getOffers.fulfilled, (state,action) => {
        state.offers = action.payload;
        state.loadingStatus = LoadingStatus.Succes;
      });
  }
});


