import {Pressable, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import TrackPlayer from 'react-native-track-player';
import {Text} from '../../../components/Text';
import {PLAYBACK_SPEED_VALUES} from '../Slider/constats';
import {PlaybackSpeed} from './PlaybackSpeed/PlaybackSpeed';
import {useTogglePlaybackRate} from '../Slider/hooks/useTogglePlaybackRate';

const PlaybackSpeedControl = () => {
  const {activeIndex, togglePlaybackSpeed} = useTogglePlaybackRate();

  return (
    <>
      {PLAYBACK_SPEED_VALUES.map((rate, index) => {
        const onPress = () =>
          togglePlaybackSpeed(index + 1, PLAYBACK_SPEED_VALUES);

        const style: ViewStyle = {
          display: activeIndex === index ? 'flex' : 'none',
        };

        return (
          <PlaybackSpeed
            style={style}
            key={rate}
            rate={rate}
            onPress={onPress}
          />
        );
      })}
    </>
  );
};

export default PlaybackSpeedControl;
