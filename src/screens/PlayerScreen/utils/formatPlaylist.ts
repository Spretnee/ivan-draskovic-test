import {Track} from 'react-native-track-player';
import {PodcastSeriesType, Episode} from '../../../api/types';

export const formatPlaylist = ({episodes}: PodcastSeriesType): Track[] =>
  episodes?.map((episode: Episode, index: number) => ({
    id: index,
    url: episode.audioUrl,
    title: episode.name,
    artist: episode.podcastSeries,
    date: episode.datePublished.toString(),
    artwork: episode.imageUrl,
    description: episode.description,
  }));
