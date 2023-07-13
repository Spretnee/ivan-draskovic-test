import { Track } from 'react-native-track-player';
import { Podcast, Episode } from '../../api/types';
import { TrackWithId } from '../../types';

export const formatPlaylist = ({
  episodes,
  ...podcastMetadata
}: Podcast): TrackWithId[] =>
  episodes?.data.map((episode: Episode) => ({
    id: episode.id,
    url: episode.audioUrl,
    title: episode.title,
    artist: podcastMetadata.title,

    date: episode.airDate.toString(),
    artwork: episode.imageUrl || podcastMetadata.imageUrl,
    description: episode.description,
    duration: episode.length,
  }));
