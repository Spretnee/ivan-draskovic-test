export interface GetPodcastSeriesResponse {
  data: Data;
}

export interface Data {
  getPodcastSeries: PodcastSeriesType;
}

// export interface PodcastSeriesType {
//   uuid: string;
//   name: string;
//   datePublished: number;
//   imageUrl: string;
//   description: string;
//   episodes: Episode[];
// }

// export interface Episode {
//   uuid: string;
//   datePublished: number;
//   name: string;
//   podcastSeries: string;
//   audioUrl: string;
//   description: string;
//   imageUrl: string;
// }
export interface Podcast {
  id: string;
  title: string;
  description: string;
  sanitizedDescription: string;
  htmlDescription: string;
  url: string;
  webUrl: string;
  rssUrl: string;
  imageUrl: string;
  language: string;
  modifiedDate: string;
  numberOfEpisodes: number;
  avgEpisodeLength: number;
  daysBetweenEpisodes: number;
  startDate: string;
  latestEpisodeDate: string;
  episodes: EpisodeData;
}

export interface PodcastResponse {
  podcast: Podcast;
}
export interface AxiosPodcastResponse {
  data: PodcastResponse;
}
export interface EpisodeData {
  data: Episode[];
}
export interface Episode {
  id: string;
  title: string;
  description: string;
  htmlDescription: string;
  airDate: string;
  imageUrl: string;
  audioUrl: string;
  url: string;
  fileSize: number;
  guid: string;
  length: number;
  explicit: boolean;
  episodeType: string;
  modifiedDate: string;
  ratingCount?: number;
  reviewCount: number;
  ratingAverage: any;
}

export type Queue = Track[];
