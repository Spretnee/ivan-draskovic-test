import TrackPlayer, {useProgress} from 'react-native-track-player';
import {
  BACKWARD_JUMP_INTERVAL,
  FORWARD_JUMP_INTERVAL,
  INITIAL_TRACK,
} from '../constants/player';
import {INITIAL_POSITION} from '../screens/PlayerScreen/Slider/constats';

export const useControls = () => {
  const {position, duration} = useProgress();
  const onSlidingComplete = async (value: Array<number>) => {
    return await TrackPlayer.seekTo(value[INITIAL_TRACK]);
  };

  const skip = async (id: number, initialPosition?: number) => {
    await TrackPlayer.skip(id, initialPosition);
  };

  const jumpForward30 = async () => {
    return await TrackPlayer.seekTo(position + FORWARD_JUMP_INTERVAL);
  };
  const jumpBack15 = async () => {
    return await TrackPlayer.seekTo(position - BACKWARD_JUMP_INTERVAL);
  };
  const next = async (initialPosition?: number) => {
    return await TrackPlayer.skipToNext(initialPosition);
  };
  const previous = async (initialPosition?: number) => {
    return await TrackPlayer.skipToPrevious(initialPosition);
  };

  const play = async () => await TrackPlayer.play();

  const pause = async () => await TrackPlayer.pause();

  const reset = async () =>
    await TrackPlayer.reset().then(() => TrackPlayer.add([]));

  return {
    play,
    pause,
    jumpForward30,
    jumpBack15,
    onSlidingComplete,
    reset,
    next,
    previous,
    skip,
    position,
    duration,
  };
};
