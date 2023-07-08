import { View, Text, Pressable } from 'react-native';
import React, { memo } from 'react';
import { SvgXml } from 'react-native-svg';
import { PAUSE, PLAY_BUTTON } from '../assets/images/svg';
import { Controls } from '../hooks/types';

export const PlayPause = ({
  isPlaying,
  controls,
  index,
  initialPosition,
}: {
  isPlaying: boolean;
  controls: Controls;
  index?: number | undefined;
  initialPosition?: number | undefined;
}) => {
  //TODO:refactor PlayPause
  if (!index) {
    return (
      <Pressable
        onPress={isPlaying ? controls.pause : controls.play}
        style={{ padding: 10 }}
      >
        <SvgXml xml={isPlaying ? PAUSE : PLAY_BUTTON} />
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={
          isPlaying
            ? controls.pause
            : () => {
                controls.skip(index, initialPosition!);
                controls.play();
              }
        }
        style={{ padding: 10 }}
      >
        <SvgXml xml={isPlaying ? PAUSE : PLAY_BUTTON} />
        {/* TODO: redo Icons Wrapper */}
      </Pressable>
    );
  }
};
