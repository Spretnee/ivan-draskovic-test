import {View, Text, SliderProps} from 'react-native';
import React from 'react';
import {Slider as OriginSlider} from '@miblanchard/react-native-slider';
import {styles} from './SliderMinimized.styles';
import {BEIGE, FONT_DARK2, GREEN, GREEN_LIGHT} from '../../../constants/colors';

export const SliderMinimized = () => {
  return (
    <View style={styles.container}>
      <OriginSlider
        containerStyle={{height: 36}}
        thumbStyle={{height: 0, borderRadius: 0}}
        thumbTintColor={FONT_DARK2}
        trackStyle={{height: 4, borderRadius: 0}}
        maximumTrackTintColor={BEIGE}
        minimumTrackTintColor={FONT_DARK2}
        value={0.4}
        onValueChange={() => {}}
      />
    </View>
  );
};
