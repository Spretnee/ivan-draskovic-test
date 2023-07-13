import TrackPlayer from 'react-native-track-player';
import { Podcast } from '../../api/types';
import { addTrack } from './addTrack';
import { formatPlaylist } from './formatPlaylist';

export const loadTracks = async (tracks: Podcast | undefined) => {
  try {
    await TrackPlayer.reset();
    if (tracks) {
      await addTrack(formatPlaylist(tracks));
    }
    await TrackPlayer.getQueue();
  } catch {}
};
