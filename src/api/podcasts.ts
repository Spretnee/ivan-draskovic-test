import {apiClient} from './axios';
import {SEARCH_ENDPOINT} from './constants';

export const search = async (query: string) => {
  const params = {
    query: query,
    content_type: ['podcast'],
    size: 20,
    knn_k: 1,
    knn_candidates: 1,
    knn_size: 1,
    embeddings_weight: 1,
    embedding_type: 'all',
  };

  try {
    const response = await apiClient.get(SEARCH_ENDPOINT, {params});
    console.log(response);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
