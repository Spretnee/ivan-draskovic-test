import {
  RootTagContext,
  TextInputBase,
  View,
  useAnimatedValue,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { Slider as OriginSlider } from '@miblanchard/react-native-slider';
import { styles } from './Slider.styles';
import { GREEN, GREEN_LIGHT } from '../../../constants/colors';
import { useProgress } from 'react-native-track-player';
import { useControls } from '../../../hooks/useControls';
import { Text } from '../../../components/Text';
import { formatTime } from './utils/formatTime';
import { SliderControls } from '../SliderControls/SliderControls';
import { Controls } from '../../../hooks/types';

export const Slider = ({
  isPlaying,
  controls,
}: {
  isPlaying: boolean;
  controls: Controls;
}) => {
  const { duration, position } = useProgress();

  return (
    <>
      <View style={styles.container}>
        <OriginSlider
          thumbStyle={styles.thumbNailStyle}
          thumbTintColor={GREEN}
          trackStyle={styles.trackStyle}
          maximumTrackTintColor={GREEN_LIGHT}
          minimumTrackTintColor={GREEN}
          maximumValue={duration}
          value={position}
          // TODO:fix twitching on slider action
          onSlidingComplete={controls.onSlidingComplete}
        />
      </View>
      <View style={styles.times}>
        <Text type={'H5'}>{formatTime(position)}</Text>
        <Text type={'H5'}>{formatTime(duration)}</Text>
      </View>
      <SliderControls isPlaying={isPlaying} controls={controls} />
    </>
  );
};
