import {createAsyncThunk} from '@reduxjs/toolkit';
import {FlickrImage} from '../../types/flickrTypes';

/**
 * @params - data - FlickrImage object
 * @returns - favourited posts by user
 */
export const saveFavourites = createAsyncThunk(
  'gallery/favourites',
  async (data: FlickrImage, {getState}) => {
    const {favourites} = getState();
    const favouritedPosts = favourites?.favourites;

    const exists = favouritedPosts.some(
      (item: FlickrImage) => item.link === data.link,
    );

    if (exists) {
      return [
        ...favouritedPosts.filter(
          (item: FlickrImage) => item.link !== data.link,
        ),
      ];
    } else {
      return [data, ...favouritedPosts];
    }
  },
);
