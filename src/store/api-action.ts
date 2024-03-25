import { AxiosInstance } from 'axios';
import { OffersDataType } from '../types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { offersSlice } from './reducer';

type ExtraType = {
  extra: AxiosInstance;
}

export const fetchGet = createAsyncThunk<OffersDataType[], void, ExtraType>(
  'offers/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OffersDataType[]>('/offers');
    dispatch(offersSlice.actions.setOffers(data));
    return data;
  },
);
