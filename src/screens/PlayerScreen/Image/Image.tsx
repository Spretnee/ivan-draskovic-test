import {
  View,
  Image as RNImage,
  ImagePropsBase,
  ImageStyle,
  StyleProp,
} from 'react-native';
import React from 'react';
import {styles} from './Image.styles';
import {Track} from 'react-native-track-player';

interface ImageType {
  url: string | number | undefined | null;
  style?: StyleProp<ImageStyle>;
}

export const Image = ({url, style}: ImageType) => {
  return (
    <View style={styles.container}>
      {url ? (
        <RNImage
          style={[{width: 160, height: 160}, style]}
          source={{
            uri: url.toString(),
          }}
        />
      ) : (
        <View style={styles.container}></View>
      )}
    </View>
  );
};
