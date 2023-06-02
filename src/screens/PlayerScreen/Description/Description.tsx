import {Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './Description.styles';
import {Text} from '../../../components/Text';

export const Description = () => {
  return (
    <View>
      <Text type="H4" numberOfLines={2}>
        Julia Ioffe joins Peter to discuss how Putin's war is playing out in
        Moscow and St. Petersburg. Meanwhile, Ben Landy and Bill Cohan discuss
        an investment banking tragedy 150 years in the making.
      </Text>
      <Pressable>
        <Text type="H4" style={{textDecorationLine: 'underline'}}>
          See More
        </Text>
      </Pressable>
    </View>
  );
};
