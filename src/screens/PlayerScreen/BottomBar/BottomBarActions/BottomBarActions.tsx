import {View, Text} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {
  FOLDER,
  MOVE_FORWARD,
  THREE_DOT_MENU,
} from '../../../../assets/images/svg';
import {styles} from './BottomBarActions.styles';

export const BottomBarActions = () => {
  return (
    <View style={styles.container}>
      <SvgXml xml={FOLDER} />
      <SvgXml xml={MOVE_FORWARD} />
      <SvgXml xml={THREE_DOT_MENU} />
    </View>
  );
};
