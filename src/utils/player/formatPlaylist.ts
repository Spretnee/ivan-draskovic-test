import {Track} from 'react-native-track-player';
import {Podcast, Episode} from '../../api/types';
import {TrackWithId} from '../../types';

export const formatPlaylist = ({episodes, title}: Podcast): TrackWithId[] =>
  episodes?.data.map((episode: Episode) => ({
    id: episode.id,
    url: episode.audioUrl,
    title: episode.title,
    artist: title,
    date: episode.airDate.toString(),
    artwork: episode.imageUrl,
    description: episode.description,
  }));
