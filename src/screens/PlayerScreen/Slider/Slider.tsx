import {
  RootTagContext,
  TextInputBase,
  View,
  useAnimatedValue,
} from 'react-native';
import React, {useState} from 'react';
import {Slider as OriginSlider} from '@miblanchard/react-native-slider';
import {styles} from './Slider.styles';
import {GREEN, GREEN_LIGHT} from '../../../constants/colors';
import TrackPlayer, {Track, useProgress} from 'react-native-track-player';
import {useControls} from '../../../hooks/useControls';
import {Text} from '../../../components/Text';
import {formatTime} from './utils/formatTime';
import {SliderControls} from '../SliderControls/SliderControls';
import {
  PlayerContext,
  usePlayerContext,
} from '../../../providers/PlayerProvider';
import {Controls} from '../../../hooks/types';

type SliderPropsType = {
  controls: Controls;
  duration: number;
  position: number;
  isPlaying: boolean;
};

export const Slider = ({
  controls,
  isPlaying,
  position,
  duration,
}: SliderPropsType) => {
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
