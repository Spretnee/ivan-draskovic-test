import axios from 'axios';
import {retrieveAccessToken} from '../utils/keychain';
import {BASE_URL} from './constants';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {'content-type': 'application/x-www-form-urlencoded'},
});

apiClient.interceptors.request.use(
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
