import { createAction } from '@reduxjs/toolkit';
import { OffersDataType } from '../types';

export const changeCity = createAction('city/changeCity', (cityName: string) => ({
  payload: cityName
}));

export const setOffers = createAction('offers/change', (offres: OffersDataType[]) => ({
  payload: offres
}));
