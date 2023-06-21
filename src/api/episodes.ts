import {apiClient} from './axios';
// import {AUTH_ENDPOINT, EPISODE_ENDPOINT, EPISODE_ID} from './constants';

export interface GetPodcastEpisodeResponse {
  data: Data;
}

export interface Data {
  getPodcastEpisode: GetPodcastEpisode;
}

export interface GetPodcastEpisode {
  uuid: string;
  name: string;
  imageUrl: any;
  podcastSeries: string;
  datePublished: string;
  description: string;
  audioUrl: string;
}
export const getPodcastEpisode = async (uuid: string) => {
  try {
    const response = await apiClient.post<GetPodcastEpisodeResponse>('', {
      query: `{
                getPodcastEpisode(uuid: "${uuid}") {
                  uuid
                  name
                  imageUrl
                  description
                  audioUrl
                }
              }
              `,
    });

    return response.data.data.getPodcastEpisode;
  } catch (e) {
    console.error(e);
  }
};
