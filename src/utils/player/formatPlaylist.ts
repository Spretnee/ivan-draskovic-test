import {Track} from 'react-native-track-player';
import {Podcast, Episode} from '../../api/types';

export const formatPlaylist = ({episodes, title}: Podcast): Track[] =>
  episodes?.data.map((episode: Episode, index: number) => ({
    id: episode.id,
    url: episode.audioUrl,
    title: episode.title,
    artist: title,
    date: episode.airDate.toString(),
    artwork: episode.imageUrl,
    description: episode.description,
  }));
