import {createSlice} from '@reduxjs/toolkit';

import {saveFavourites} from '../actions/favouriteAction';
import {FlickrImage} from '../../types/flickrTypes';

type ReducerState = {
  loading: boolean;
  favourites: FlickrImage[];
};

const initialState: ReducerState = {
  loading: false,
  favourites: [],
};

const favouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(saveFavourites.pending, state => {
        state.loading = true;
      })
      .addCase(saveFavourites.fulfilled, (state, action) => {
        state.loading = false;
        state.favourites = action.payload;
      })
      .addCase(saveFavourites.rejected, state => {
        state.loading = false;
      });
  },
});

export default favouriteSlice;
