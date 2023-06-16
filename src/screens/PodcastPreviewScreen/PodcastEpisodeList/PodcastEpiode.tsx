import {Pressable} from 'react-native';
import React, {useState} from 'react';
import {PodcastEpisodeListType} from './types';
import {Text} from '../../../components/Text';
import {formatString} from './utils/formatString';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList, ScreenPropsPlayer} from '../../../navigation/types';
import {Episode} from '../../../api/types';
import {styles} from './PodcastEpisode.styles';
import {Track} from 'react-native-track-player';

type PodcastEpisodeProps = {
  track: Track;
};

export const PodcastEpisode = ({track}: PodcastEpisodeProps) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onPress = () => {
    navigate('Player', {track});
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text type={'H3'}>{track?.title}</Text>
      <Text type={'H5'} numberOfLines={2}>
        {formatString(track?.description)}
      </Text>
    </Pressable>
  );
};
