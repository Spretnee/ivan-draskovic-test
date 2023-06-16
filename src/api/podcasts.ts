import {apiClient} from './axios';
import {SEARCH_ENDPOINT} from './constants';
import {GetPodcastSeriesResponse} from './types';

type getPodcastProps = {
  query: string;
};

export const getPodcast = async (query: string) => {
  try {
    const response = await apiClient.post<GetPodcastSeriesResponse>('', {
      query: `{
                    getPodcastSeries(uuid: "${query}") {
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

    return response.data;
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
