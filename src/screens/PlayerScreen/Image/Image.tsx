import {View, Image as RNImage} from 'react-native';
import React from 'react';
import {styles} from './Image.styles';
import {PodcastSeriesType} from '../../../api/types';

type ImageType = {
  uri: PodcastSeriesType['imageUrl'] | undefined;
};

export const Image = ({uri}: ImageType) => {
  return (
    <View style={styles.container}>
      {uri ? (
        <RNImage
          style={{width: 160, height: 160}}
          source={{
            uri,
          }}
        />
      ) : null}
    </View>
  );
};
