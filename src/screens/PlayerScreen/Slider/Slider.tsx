import {
  RootTagContext,
  TextInputBase,
  View,
  useAnimatedValue,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {Slider as OriginSlider} from '@miblanchard/react-native-slider';
import {styles} from './Slider.styles';
import {GREEN, GREEN_LIGHT} from '../../../constants/colors';
import {useProgress} from 'react-native-track-player';
import {useControls} from './hooks/useControls';
import {Text} from '../../../components/Text';
import {formatTime} from './utils/formatTime';
import {SliderControls} from '../SliderControls/SliderControls';
import {PlayerStateContext} from '../../../providers/PlayerStateProvider';

export const Slider = () => {
  const {progressBarBuffered, progressBarPosition, progressBarDuration} =
    useContext(PlayerStateContext);
  const {
    handlePosition,
    jumpBack15,
    jumpForward30,
    onSlidingComplete,
    pause,
    play,
    value,
  } = useControls(progressBarPosition);

  return (
    <>
      <View style={styles.container}>
        <OriginSlider
          thumbStyle={styles.thumbNailStyle}
          thumbTintColor={GREEN}
          trackStyle={styles.trackStyle}
          maximumTrackTintColor={GREEN_LIGHT}
          minimumTrackTintColor={GREEN}
          maximumValue={progressBarDuration}
          onValueChange={handlePosition}
          animateTransitions={true}
          animationType="spring"
          value={value === 0 ? progressBarPosition : value}
          onSlidingComplete={onSlidingComplete}
        />
      </View>
      <View style={styles.times}>
        <Text type={'H5'}>{formatTime(progressBarPosition)}</Text>
        <Text type={'H5'}>{formatTime(progressBarDuration)}</Text>
      </View>
      <SliderControls
        play={play}
        pause={pause}
        jumpBack={jumpBack15}
        jumpForward={jumpForward30}
      />
    </>
  );
};
