import {View, Image as RNImage} from 'react-native';
import React from 'react';
import {styles} from './Image.styles';
import {Episode, GetPodcastSeries} from '../../../navigation/RootNavigator';

type ImageType = {
  uri: GetPodcastSeries['imageUrl'] | undefined;
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
