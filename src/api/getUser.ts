import {baseUrl} from './axios';
import {AUTH_ENDPOINT, CREDENTIALS} from './constants';
import {storeAccessToken} from './keychain';
import {GetUserProps, GetUserResponse} from './types';

export const getUser = async (
  credentials: GetUserProps,
): Promise<GetUserResponse | undefined> => {
  const qs = require('qs');
  try {
    const response = await baseUrl.post(
      AUTH_ENDPOINT,
      qs.stringify(credentials),
    );
    console.log('default header', baseUrl.defaults.headers);
    storeAccessToken(response.data.access_token);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
