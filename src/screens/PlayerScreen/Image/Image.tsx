import {View, Image as RNImage} from 'react-native';
import React from 'react';
import {styles} from './Image.styles';
import {Episode} from '../../../api/types';

type ImageType = {
  uri: Episode['image'];
};

export const Image = ({uri}: ImageType) => {
  return (
    <View style={styles.container}>
      <RNImage
        style={{width: 160, height: 160}}
        source={{
          uri: uri,
        }}
      />
    </View>
  );
};
