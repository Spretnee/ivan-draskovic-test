import { View, Image as RNImage, StyleProp, ImageStyle } from 'react-native';
import React from 'react';
import { styles } from './Image.styles';

export const Image = ({
  // TODO:refactor image and optimize
  url,
  style,
}: {
  url: string | number | undefined;
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
            uri: typeof url === 'number' ? '' : url,
          }}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};
