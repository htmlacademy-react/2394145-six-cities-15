import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FavoriteInitialStateType, OfferDataType, OffersDataType } from '../../types';
import { LoadingStatus } from '../../consts';
import { getFavoriteOffers, postFavoriteStatus } from '../api-action';

const initialState: FavoriteInitialStateType = {
  offers: [],
  loadingStatus: undefined,
  newOffer: null,
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteOffers: (state, action: PayloadAction<OffersDataType[]>) => {
      state.offers = action.payload;
    },
    setNewOffer: (state, action: PayloadAction<OffersDataType>) => {
      state.newOffer = action.payload;
    },
    refreshCard: (state, action: PayloadAction<OfferDataType>) => {
      state.offers.map((current) => {
        if (current.id === action.payload.id) {
          current.isFavorite = !action.payload.isFavorite;
        }
      });
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
      })
      .addCase(postFavoriteStatus.pending, (state) => {
        state.loadingStatus = LoadingStatus.Loading;
      })
      .addCase(postFavoriteStatus.fulfilled, (state, action) => {
        state.loadingStatus = LoadingStatus.Succes;
        if(action.payload.isFavorite) {
          state.offers = [...state.offers, action.payload];
        } else {
          state.offers = state.offers.filter((current) => current.id !== action.payload.id);
        }

      });
  }
});
