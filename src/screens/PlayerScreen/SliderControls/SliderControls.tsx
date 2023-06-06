import {ActivityIndicator, AppStateStatus, Pressable, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from './SliderControls.styles';
import {SvgXml} from 'react-native-svg';
import {
  FIFTEEN_BACK,
  PAUSE,
  PLAY_BUTTON,
  THIRTY_FORWARD,
} from '../../../assets/images/svg';
import {Text} from '../../../components/Text';
import TrackPlayer from 'react-native-track-player';
import {PlayerStateContext} from '../../../providers/PlayerStateProvider';
import PlaybackSpeedControl from './PlaybackSpeedControl';
import {GREEN} from '../../../constants/colors';

type SliderControlsProps = {
  jumpForward: () => void;
  jumpBack: () => void;
  play: () => void;
  pause: () => void;
};

export const SliderControls = ({
  jumpBack,
  jumpForward,
  play,
  pause,
}: SliderControlsProps) => {
  const {isPlaying, isBuffering, isConnecting} = useContext(PlayerStateContext);

  return (
    <View>
      <View style={styles.container}>
        <SvgXml xml={FIFTEEN_BACK} onPress={jumpBack} />
        {isBuffering || isConnecting ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator
              color={GREEN}
              size={'small'}
              style={{alignSelf: 'center'}}
            />
          </View>
        ) : !isPlaying ? (
          <SvgXml onPress={play} xml={PLAY_BUTTON} />
        ) : (
          <SvgXml onPress={pause} xml={PAUSE} />
        )}

        <SvgXml onPress={jumpForward} xml={THIRTY_FORWARD} />
        <PlaybackSpeedControl />
      </View>
    </View>
  );
};
