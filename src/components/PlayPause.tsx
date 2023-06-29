import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {PAUSE, PLAY_BUTTON} from '../assets/images/svg';
import {Controls} from '../hooks/types';

export const PlayPause = ({
  isPlaying,
  controls,
  index,
}: {
  isPlaying: boolean;
  controls: Controls;
  index?: number | undefined;
}) => {
  //TODO:refactor PlayPause
  if (!index) {
    return (
      <Pressable
        onPress={isPlaying ? controls.pause : controls.play}
        style={{padding: 10}}
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
                controls.skip(index);
                controls.play();
              }
        }
        style={{padding: 10}}
      >
        <SvgXml xml={isPlaying ? PAUSE : PLAY_BUTTON} />
        {/* TODO: redo Icons Wrapper */}
      </Pressable>
    );
  }
};
