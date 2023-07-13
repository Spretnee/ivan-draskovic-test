import { PodcastCategories } from '../constants/podchaserApi';
import { apiClient } from './axios';
import { MOCK_CATEGORIES_ENDPOINT } from './constants';
import { Podcast } from './types';

export const getPodcastsByCategory = async (query: PodcastCategories) => {
  try {
    const response = await apiClient.get<{ data: Podcast[] }>(
      `${MOCK_CATEGORIES_ENDPOINT}/${query}`,
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
