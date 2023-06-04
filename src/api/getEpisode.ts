import {initialWindowMetrics} from 'react-native-safe-area-context';
import {baseUrl} from './axios';
import {EPISODE_ENDPOINT, EPISODE_ID} from './constants';
import {Episode} from './types';

export const getEpisode = async (id: string): Promise<Episode> => {
  const response = await baseUrl.get(`${EPISODE_ENDPOINT}${id}`);
  return response.data;
};
