import TrackPlayer, {Track} from 'react-native-track-player';
import {Queue} from '../../api/types';

export const addTrack = async (queue: Queue) => {
  await TrackPlayer.add(queue);
};
