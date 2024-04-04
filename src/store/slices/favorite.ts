import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteInitialStateType, OffersDataType } from '../../types';
import { LoadingStatus } from '../../consts';
import { getFavoriteOffers } from '../api-action';

const initialState: FavoriteInitialStateType = {
  offers: [],
  loadingStatus: undefined,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteOffers: (state, action: PayloadAction<OffersDataType[]>) => {
      state.offers = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavoriteOffers.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(getFavoriteOffers.fulfilled, (state,action) => {
        state.offers = action.payload;
        state.loadingStatus = LoadingStatus.Succes;
      });
  }
});
