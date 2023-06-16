import TrackPlayer, {Track} from 'react-native-track-player';

export const addTrack = async (playlist: Track[]) => {
  await TrackPlayer.add(playlist);
};
