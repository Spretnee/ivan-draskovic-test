import {View} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {PAUSE_SMALL, PLAY_SMALL, CLOSE} from '../../../../assets/images/svg';
import {styles} from './BottomPlayerControls.styles';
import {BottomPlayerControlsProps} from './types';

export const BottomPlayerControls = ({
  isPlaying,
  pause,
  play,
  reset,
}: BottomPlayerControlsProps) => {
  return (
    <View style={styles.container}>
      {isPlaying ? (
        <SvgXml xml={PAUSE_SMALL} onPress={pause} style={styles.button} />
      ) : (
        <SvgXml xml={PLAY_SMALL} onPress={play} style={styles.button} />
      )}

      <SvgXml style={{top: 2}} xml={CLOSE} onPress={reset} />
    </View>
  );
};
