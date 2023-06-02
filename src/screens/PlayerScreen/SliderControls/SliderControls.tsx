import {View} from 'react-native';
import React from 'react';
import {styles} from './SliderControls.styles';
import {SvgXml} from 'react-native-svg';
import {
  FIFTEEN_BACK,
  PLAY_BUTTON,
  THIRTY_FORWARD,
} from '../../../assets/images/svg';
import {Text} from '../../../components/Text';

export const SliderControls = () => {
  return (
    <View>
      <View style={styles.container}>
        <SvgXml xml={FIFTEEN_BACK} />
        <SvgXml xml={PLAY_BUTTON} />
        <SvgXml xml={THIRTY_FORWARD} />
      </View>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        1x
      </Text>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        1.5x
      </Text>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        2x
      </Text>
      <Text
        style={{position: 'absolute', bottom: '36%', right: 16}}
        type="H3_BOLD">
        4x
      </Text>
    </View>
  );
};
