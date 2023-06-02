import {View, Text} from 'react-native';
import React from 'react';
import {Slider as OriginSlider} from '@miblanchard/react-native-slider';
import {styles} from './Slider.styles';
import {GREEN, GREEN_LIGHT} from '../../../constants/colors';

export const Slider = () => {
  return (
    <View style={styles.container}>
      <OriginSlider
        thumbStyle={{height: 20, width: 4, borderRadius: 0}}
        thumbTintColor={GREEN}
        trackStyle={{height: 12}}
        maximumTrackTintColor={GREEN_LIGHT}
        minimumTrackTintColor={GREEN}
        value={0.4}
        onValueChange={() => {}}
      />
    </View>
  );
};
