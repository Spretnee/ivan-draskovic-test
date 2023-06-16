import {ActivityIndicator, AppStateStatus, Pressable, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './SliderControls.styles';
import {SvgXml} from 'react-native-svg';
import {
  FIFTEEN_BACK,
  NEXT,
  PAUSE,
  PLAY_BUTTON,
  PREVIOUS,
  THIRTY_FORWARD,
} from '../../../assets/images/svg';
import {Text} from '../../../components/Text';
import TrackPlayer from 'react-native-track-player';
import {PlayerContext} from '../../../providers/PlayerProvider';
import PlaybackSpeedControl from './PlaybackSpeedControl';
import {GREEN} from '../../../constants/colors';
import {Controls} from '../../../hooks/types';

type SliderControlsProps = {
  controls: Controls;
};

export const SliderControls = ({controls}: SliderControlsProps) => {
  const {isPlaying, isBuffering, isConnecting} = useContext(PlayerContext);

  return (
    <View>
      <View style={styles.container}>
        <SvgXml onPress={controls.previous} xml={PREVIOUS} />

        <SvgXml xml={FIFTEEN_BACK} onPress={controls.jumpBack15} />
        {isBuffering || isConnecting ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              color={GREEN}
              size={'small'}
              style={{alignSelf: 'center'}}
            />
          </View>
        ) : !isPlaying ? (
          <SvgXml onPress={controls.play} xml={PLAY_BUTTON} />
        ) : (
          <SvgXml onPress={controls.pause} xml={PAUSE} />
        )}

        <SvgXml onPress={controls.jumpForward30} xml={THIRTY_FORWARD} />
        <SvgXml onPress={controls.next} xml={NEXT} />

        <PlaybackSpeedControl />
      </View>
    </View>
  );
};
