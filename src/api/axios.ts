import axios from 'axios';
import Config from 'react-native-config';

export const apiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${Config.API_TOKEN}`,
  },
});
