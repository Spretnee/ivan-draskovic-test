import { Pressable, View } from 'react-native';
import React from 'react';
import { GREEN, WHITE } from '../../constants/colors';
import { SvgXml } from 'react-native-svg';
import { SEARCH } from '../../assets/images/svg';
import { Text } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';

export const WhatToListenButton = () => {
  const { navigate } = useNavigation<any>();
  return (
    <Pressable
      onPress={() => navigate('SearchOptions')}
      style={{
        flexDirection: 'row',
        padding: 4,
        paddingHorizontal: 12,
        backgroundColor: WHITE,
        margin: 8,
        height: 40,
        borderRadius: 8,
        alignItems: 'center',
      }}
    >
      <SvgXml xml={SEARCH} />
      <Text style={{ marginLeft: 20 }} type="H3">
        What would you like to listen?
      </Text>
    </Pressable>
  );
};
