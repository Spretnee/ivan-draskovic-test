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
        containerStyle={{height: 36}}
        thumbStyle={{height: 0, borderRadius: 0}}
        thumbTintColor={FONT_DARK2}
        trackStyle={{height: 4, borderRadius: 0}}
        maximumTrackTintColor={BEIGE}
        minimumTrackTintColor={FONT_DARK2}
        value={position}
        maximumValue={duration}
        animateTransitions={true}
        animationType="spring"
        onSlidingComplete={async (value: Array<number>) => {
          await TrackPlayer.seekTo(value[0]);
        }}
      />
    </View>
  );
};
