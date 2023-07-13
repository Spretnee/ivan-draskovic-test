import axios from 'axios';

export const getImage = async (url: string) => {
  try {
    const response = await axios.get<any>(url);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
