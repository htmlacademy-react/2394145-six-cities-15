import { configureStore } from '@reduxjs/toolkit';
import { offersSlice } from './slices/offers';
import { createAPI } from '../services/api';
import { offerSlice } from './slices/offer';
import { userSlice } from './slices/user';
import { commentsSlice } from './slices/comments';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    offers: offersSlice.reducer,
    offer: offerSlice.reducer,
    user: userSlice.reducer,
    comments: commentsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
