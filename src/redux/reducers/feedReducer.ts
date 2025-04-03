import {createSlice} from '@reduxjs/toolkit';

import {
  getListOneFeed,
  getListTwoFeed,
  getListThreeFeed,
} from '../actions/feedAction';
import { FlickrImage } from '../../types/flickrTypes';

type ReducerState = {
  loading: boolean;
  listOneFeed: FlickrImage[];
  listTwoFeed: FlickrImage[];
  listThreeFeed: FlickrImage[];
};

const initialState: ReducerState = {
  loading: false,
  listOneFeed: [],
  listTwoFeed: [],
  listThreeFeed: [],
};

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // List One Feed
      .addCase(getListOneFeed.pending, state => {
        state.loading = true;
      })
      .addCase(getListOneFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.listOneFeed = action.payload;
      })
      .addCase(getListOneFeed.rejected, state => {
        state.loading = false;
      })
      // List Two Feed
      .addCase(getListTwoFeed.pending, state => {
        state.loading = true;
      })
      .addCase(getListTwoFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.listTwoFeed = action.payload;
      })
      .addCase(getListTwoFeed.rejected, state => {
        state.loading = false;
      })
      // List Three Feed
      .addCase(getListThreeFeed.pending, state => {
        state.loading = true;
      })
      .addCase(getListThreeFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.listThreeFeed = action.payload;
      })
      .addCase(getListThreeFeed.rejected, state => {
        state.loading = false;
      });
  },
});

export default gallerySlice;
