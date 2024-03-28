import { createSlice } from '@reduxjs/toolkit';
import { LoadingStatus } from '../../consts';
import { CommentsInitialState } from '../../types';
import { getOfferComments } from '../api-action';


const initialState: CommentsInitialState = {
  id: '',
  comments: [],
  status: undefined,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOfferComments.pending, (state) => {
        state.status = LoadingStatus.Loading;
      })
      .addCase(getOfferComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.status = LoadingStatus.Succes;
      });
  }
});
