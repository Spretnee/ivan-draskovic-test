import axios from 'axios';
import {retrieveAccessToken} from '../utils/keychain';
import {BASE_URL} from './constants';

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    'X-USER-ID': 439,
    'X-API-KEY':
      'e4f098b6b78965c6f7f9bd4c3d062562b21b9c87c2f429878303d8faa982f68c0aba8b97b4b8d734f50a2450a078a75877',
  },
});

// apiClient.interceptors.request.use(
//   async config => {
//     if (config.headers) {
//       const token = await retrieveAccessToken();
//       console.log('interceptor token', token);
//       config.headers.Authorization = `Bearer ${token}`;
//       return config;
//     }
//   },

//   error => {
//     Promise.reject(error);
//   },
// );
