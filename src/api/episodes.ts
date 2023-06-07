import {apiClient} from './axios';
import {AUTH_ENDPOINT, EPISODE_ENDPOINT, EPISODE_ID} from './constants';
import {AuthUser, AuthUserProps, Episode} from './types';
import {storeAccessToken} from '../utils/keychain';

export const getEpisode = async (id: string) => {
  const response = await apiClient.get<Episode>(`${EPISODE_ENDPOINT}/${id}`);
  return response.data;
};

export const authUser = async (
  credentials: AuthUserProps,
): Promise<AuthUser | undefined> => {
  const qs = require('qs');
  try {
    const response = await apiClient.post(
      AUTH_ENDPOINT,
      qs.stringify(credentials),
    );
    storeAccessToken(response.data.access_token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
