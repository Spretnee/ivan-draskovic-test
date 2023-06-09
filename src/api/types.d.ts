export interface GetPodcastSeriesResponse {
  data: Data;
}

export interface Data {
  getPodcastSeries: GetPodcastSeries;
}

export interface GetPodcastSeries {
  uuid: string;
  name: string;
  datePublished: number;
  imageUrl: string;
  description: string;
  episodes: Episode[];
}

export interface Episode {
  uuid: string;
  datePublished: number;
  name: string;
  podcastSeries: string;
  audioUrl: string;
  description: string;
  imageUrl: string;
}
