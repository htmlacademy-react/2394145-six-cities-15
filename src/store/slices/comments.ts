import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../consts';
import { CommentsInitialState } from '../../types';
import { getOfferComments, postOfferComments } from '../api-action';


const initialState: CommentsInitialState = {
  id: '',
  comments: [],
  status: undefined,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setLoadingStatus: (state) => {
      state.status = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOfferComments.pending, (state) => {
        state.status = LoadingStatus.Loading;
      })
      .addCase(getOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = LoadingStatus.Succes;
      })
      .addCase(postOfferComments.fulfilled, (state, action) => {
        state.comments = [...state.comments, action.payload];
        state.status = LoadingStatus.Succes;
      })
      .addCase(postOfferComments.pending, (state) => {
        state.status = LoadingStatus.Loading;
      })
      .addCase(postOfferComments.rejected, (state) => {
        state.status = LoadingStatus.Reject;
      });
  }
});
