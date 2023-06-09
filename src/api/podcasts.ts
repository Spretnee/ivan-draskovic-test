import {apiClient} from './axios';
import {SEARCH_ENDPOINT} from './constants';
import {GetPodcastSeriesResponse} from './types';

// export const search = async (query: string) => {
//   const params = {
//     query: query,
//     content_type: ['podcast'],
//     size: 20,
//     knn_k: 20,
//     knn_candidates: 500,
//     knn_size: 5,
//     embeddings_weight: 2,
//     embedding_type: 'symmetric',
//   };

//   try {
//     const response = await apiClient.get(SEARCH_ENDPOINT, {params});
//     console.log(response);
//     return response.data;
//   } catch (e) {
//     console.error(e);
//   }
// };

export const getPodcast = async (name: string) => {
  try {
    const response = await apiClient.post<GetPodcastSeriesResponse>('', {
      query: `{
                    getPodcastSeries(name: "${name}") {
                      uuid
                      name
                      datePublished
                      imageUrl
                      description
                      episodes {
                                uuid
                                name
                                datePublished
                                podcastSeries: name
                                audioUrl
                                description
                                imageUrl

                              }
                    }
                  }`,
    });

    return response.data.data.getPodcastSeries;
  } catch (e) {
    console.error(e);
  }
};

export const searchForTerm = async (term: string) => {
  try {
    const response = await apiClient.post('', {
      query: `{
                searchForTerm(term: ${term}) {
                  searchId
                  podcastSeries {
                    uuid
                    name
                    description
                  }
  }`,
    });

    return response.data.data.getPodcastSeries;
  } catch (e) {
    console.error(e);
  }
};
