import {useState} from 'react';

import TrackPlayer, {Track} from 'react-native-track-player';
import {INITIAL_TRACK} from '../constants/player';

export const useControls = (position: number) => {
  const onSlidingComplete = async (value: Array<number>) =>
    await TrackPlayer.seekTo(value[INITIAL_TRACK]);

  const jumpForward30 = async () => {
    return await TrackPlayer.seekTo(position + 30);
  };
  const skip = async (id: number) => {
    await TrackPlayer.skip(id);
  };

  const jumpBack15 = async () => {
    return await TrackPlayer.seekTo(position - 15);
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
