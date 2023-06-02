import React from 'react';
import {SvgXml} from 'react-native-svg';
import {BACK_BUTTON} from '../../../assets/images/svg';
import {useNavigation} from '@react-navigation/native';

export const BackButton = () => {
  const {goBack} = useNavigation();
  return <SvgXml onPress={goBack} xml={BACK_BUTTON} />;
};
