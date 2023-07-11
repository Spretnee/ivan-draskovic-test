import { View, Image as RNImage, StyleProp, ImageStyle } from 'react-native';
import React from 'react';
import { styles } from './Image.styles';
import { Episode } from '../../../api/types';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

export const Image = ({
  url,
  style,
}: {
  url: string | undefined;
  style?: StyleProp<ImageStyle>;
}) => {
  return (
    <View style={styles.container}>
      {url ? (
        <RNImage
          style={[
            {
              width: 160,
              height: 160,
            },
            style,
          ]}
          source={{
            uri: url,
          }}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};
