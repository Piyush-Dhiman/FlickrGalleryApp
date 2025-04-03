import { createAsyncThunk } from '@reduxjs/toolkit';
import { getImages } from '../../api/services';


/**
 * @params - tags - ['dogs', 'kittens']
 * @returns - posts related to tags
 */
export const getListOneFeed = createAsyncThunk('gallery/getListOneFeed', async (tags: string) => {
  return await getImages(tags);
});
export const getListTwoFeed = createAsyncThunk('gallery/getListTwoFeed', async (tags: string) => {
  return await getImages(tags);
});
export const getListThreeFeed = createAsyncThunk('gallery/getListThreeFeed', async (tags: string) => {
  return await getImages(tags);
});