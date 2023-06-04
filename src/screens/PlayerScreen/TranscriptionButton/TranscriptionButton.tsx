import {Pressable, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
import {styles} from './TranscriptionButton.style';
import {Text} from '../../../components/Text';
import {CROSS} from '../../../assets/images/svg';
import {BLACK, WHITE} from '../../../constants/colors';

export const TranscriptionButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text type="H6" style={{color: BLACK}}>
        See transcription
      </Text>
    </Pressable>
  );
};
