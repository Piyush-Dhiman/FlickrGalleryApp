import {combineReducers} from '@reduxjs/toolkit';
import gallerySlice from './feedReducer';
import favouriteSlice from './favouriteReducer';

const rootReducers = combineReducers({
  [gallerySlice.name]: gallerySlice.reducer,
  [favouriteSlice.name]: favouriteSlice.reducer,
});

export default rootReducers;
