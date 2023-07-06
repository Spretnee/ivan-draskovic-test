import {View, Text, SliderProps} from 'react-native';
import React, {useState} from 'react';
import {Slider as OriginSlider} from '@miblanchard/react-native-slider';
import {styles} from './SliderMinimized.styles';
import {BEIGE, FONT_DARK2, GREEN, GREEN_LIGHT} from '../../../constants/colors';
import TrackPlayer, {useProgress} from 'react-native-track-player';

type SliderMinimizedProps = {
  position: number;
  buffered?: number;
  duration: number;
};

export const SliderMinimized = ({
  position,
  buffered,
  duration,
}: SliderMinimizedProps) => {
  return (
    <View style={styles.container}>
      <OriginSlider
        containerStyle={styles.containerStyle}
        thumbStyle={styles.thumb}
        maximumTrackTintColor={BEIGE}
        minimumTrackTintColor={FONT_DARK2}
        disabled={true}
        value={position}
        maximumValue={duration}
      />
    </View>
  );
};
