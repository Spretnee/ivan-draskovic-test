import {View} from 'react-native';
import React from 'react';
import {PodcastEpisodeListType} from './types';
import {Text} from '../../../components/Text';
import {styles} from './PodcastEpisodeList.styles';
import {formatString} from './utils/formatString';

const PodcastEpisodeList = ({name, description}: PodcastEpisodeListType) => {
  return (
    <View style={styles.container}>
      <Text type={'H3'}>{name}</Text>
      <Text type={'H5'} numberOfLines={2}>
        {formatString(description)}
      </Text>
    </View>
  );
};

export default PodcastEpisodeList;
