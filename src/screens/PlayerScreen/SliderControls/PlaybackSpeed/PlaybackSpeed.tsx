import React, {useState} from 'react';
import {Text} from '../../../../components/Text';
import {Pressable, ViewStyle} from 'react-native';
import {styles} from './PlaybackSpeed.style';

type PlaybackSpeedProps = {
  rate: number;
  onPress: () => void;
  style: ViewStyle;
};

export const PlaybackSpeed = ({style, rate, onPress}: PlaybackSpeedProps) => {
  return (
    <Pressable onPress={onPress} style={[style, styles.container]}>
      <Text type="H3_BOLD">{`${rate}x`}</Text>
    </Pressable>
  );
};
