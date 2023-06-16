import {View, Image as RNImage} from 'react-native';
import React from 'react';
import {styles} from './Image.styles';
import {PodcastSeriesType} from '../../../api/types';
import {Track} from 'react-native-track-player';

type ImageType = {
  url: string | number | undefined | null;
};

export const Image = ({url}: ImageType) => {
  return (
    <View style={styles.container}>
      {url ? (
        <RNImage
          style={{width: 160, height: 160}}
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
