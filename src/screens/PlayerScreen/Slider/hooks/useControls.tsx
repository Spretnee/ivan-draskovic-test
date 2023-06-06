import {useContext, useState} from 'react';
import {PlayerStateContext} from '../../../../providers/PlayerStateProvider';
import {NumberArray} from 'react-native-svg';
import TrackPlayer from 'react-native-track-player';

export const useControls = (position: number) => {
  const [value, setValue] = useState(position);

  const handlePosition = (value: number[]) => {
    setValue(Math.round(value[0]));
  };
  const onSlidingComplete = async (value: Array<number>) =>
    await TrackPlayer.seekTo(value[0]);

  const jumpForward30 = async () => {
    setValue(position + 30);
    return await TrackPlayer.seekTo(position + 30);
  };

  const jumpBack15 = async () => {
    setValue(position - 15);
    return await TrackPlayer.seekTo(position - 15);
  };

  const play = async () => await TrackPlayer.play();
  const pause = async () => await TrackPlayer.pause();
  return {
    play,
    pause,
    jumpForward30,
    jumpBack15,
    handlePosition,
    value,
    onSlidingComplete,
  };
};
