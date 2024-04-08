import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../consts';
import { OfferInitialStateType } from '../../types';
import { getOffer, getOffersNearby } from '../api-action';


const initialState: OfferInitialStateType = {
  offer: null,
  nearby: [],
  status: undefined,
};

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    refreshOffer: (state) => {
      if (state.offer !== null){
        state.offer.isFavorite = !state.offer?.isFavorite;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffer.pending, (state) => {
        state.status = LoadingStatus.Loading;
      })
      .addCase(getOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.status = LoadingStatus.Succes;
      })
      .addCase(getOffer.rejected, (state) => {
        state.status = LoadingStatus.Reject;
      })
      .addCase(getOffersNearby.fulfilled, (state, action) => {
        state.nearby = action.payload;
      });
  }
});
