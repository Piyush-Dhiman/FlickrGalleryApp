import axios from 'axios';

import {BASEURL} from './urls';
import Endpoints from './endpoint';

/**
 * 
 * @param tags - for getting posts related to tags
 * @returns API Reponse
 */
export const getImages = async (tags: string = '') => {
  try {
    const response = await axios.get(
      `${BASEURL}${Endpoints.feed}&tags=${tags}`,
    );

    return response.data.items;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
