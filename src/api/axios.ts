import axios from 'axios';
import {retrieveAccessToken} from './keychain';
import {BASE_URL} from './constants';

export const baseUrl = axios.create({
  baseURL: BASE_URL,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});

baseUrl.interceptors.request.use(
  async config => {
    if (config.headers) {
      const token = await retrieveAccessToken();
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    }
  },

  error => {
    Promise.reject(error);
  },
);
