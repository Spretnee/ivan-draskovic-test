import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  PAUSE,
  PAUSE_SMALL,
  PLAY_BUTTON,
  PLAY_SMALL,
} from '../assets/images/svg';
import {useControls} from '../hooks/useControls';

export const PlayPause = ({
  isPlaying,
  type,
}: {
  isPlaying: boolean;
  type?: 'small' | 'large';
}) => {
  const {play, pause} = useControls();

  return (
    <Pressable onPress={isPlaying ? pause : play} style={{padding: 10}}>
      <SvgXml xml={isPlaying ? PAUSE : PLAY_BUTTON} />
    </Pressable>
  );
};
