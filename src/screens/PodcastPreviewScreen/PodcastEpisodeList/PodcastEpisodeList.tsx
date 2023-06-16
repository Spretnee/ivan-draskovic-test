import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {PodcastEpisode} from './PodcastEpiode';
import {Episode, PodcastSeriesType} from '../../../api/types';
import {Track} from 'react-native-track-player';
import {PlayerContext} from '../../../providers/PlayerProvider';

type PodcastEpisodeListProps = {
  queue: Track[];
};
const PodcastEpisodeList = () => {
  const {queue} = useContext(PlayerContext);
  if (!queue) {
    return <ActivityIndicator />;
  } else {
    return (
      <FlatList
        style={{marginBottom: 40}}
        data={queue}
        renderItem={({item}) => <PodcastEpisode track={item} />}
        keyExtractor={item => item.id}
      />
    );
  }
};

export default PodcastEpisodeList;
