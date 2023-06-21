import {useState} from 'react';

import TrackPlayer, {Track} from 'react-native-track-player';
import {
  BACKWARD_JUMP_INTERVAL,
  FORWARD_JUMP_INTERVAL,
  INITIAL_TRACK,
} from '../constants/player';

export const useControls = (position?: number) => {
  const onSlidingComplete = async (value: Array<number>) =>
    await TrackPlayer.seekTo(value[INITIAL_TRACK]);

  const jumpForward30 = async () => {
    return await TrackPlayer.seekTo(
      position ? position + FORWARD_JUMP_INTERVAL : INITIAL_TRACK,
    );
  };
  const skip = async (id: number) => {
    await TrackPlayer.skip(id);
  };

  const jumpBack15 = async () => {
    return await TrackPlayer.seekTo(
      position ? position + BACKWARD_JUMP_INTERVAL : INITIAL_TRACK,
    );
  };
  const next = async () => {
    return await TrackPlayer.skipToNext();
  };
  const previous = async () => {
    return await TrackPlayer.skipToPrevious();
  };

  const play = async () => {
    return await TrackPlayer.play();
  };
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
  };
};
