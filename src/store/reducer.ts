import { createReducer } from '@reduxjs/toolkit';
import { changeCity, setOffers } from './action';
import { DEFAULT_CITY } from '../consts';
import { InitialStateType } from '../types';

const initialState: InitialStateType = {
  city: DEFAULT_CITY,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

