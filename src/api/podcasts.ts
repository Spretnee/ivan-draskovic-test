import axios, {AxiosResponse} from 'axios';
import {MOCK_PODCAST_ENDPOINT, MOCK_PODCAST_ID} from './constants';
import {AxiosPodcastResponse, Podcast} from './types';
import {apiClient} from './axios';
import Config from 'react-native-config';

type getPodcastProps = {
  query: string;
};

const getPodcast = async (query: string) => {
  try {
    const response = await apiClient.post<AxiosPodcastResponse>('', {
      query: `{
            podcast(identifier: {id: "${query}", type: PODCHASER}) {
        id
        title
        description

        episodes {
            data {
                id
                title
                description

                airDate
                imageUrl
                audioUrl

            }
        }
    }

                  }`,
    });
    console.log('headers', response.headers);
    return response.data.data.podcast;
  } catch (e) {
    console.error('Error', e);
  }
};

const getPodcastMock = async (query: string) => {
  try {
    const response = await apiClient.get<Podcast>(
      `${MOCK_PODCAST_ENDPOINT}/${query}`,
    );
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const handleGetPodcast = (query: string) =>
  Config.ENV === 'development' ? getPodcastMock(query) : getPodcast(query);
