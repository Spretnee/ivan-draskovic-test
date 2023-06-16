import {Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './Description.styles';
import {Text} from '../../../components/Text';
import {Episode} from '../../../api/types';
import {formatString} from '../../PodcastPreviewScreen/PodcastEpisodeList/utils/formatString';
import {Track} from 'react-native-track-player';

type DescriptionProps = {
  description: Track['description'];
};

export const Description = ({description}: DescriptionProps) => {
  return (
    <View>
      <Text type="H4" numberOfLines={2}>
        {formatString(description)}
      </Text>
      <Pressable>
        <Text type="H4" style={{textDecorationLine: 'underline'}}>
          See More
        </Text>
      </Pressable>
    </View>
  );
};
