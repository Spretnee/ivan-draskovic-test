import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {PodcastEpisode} from './PodcastEpiode';
import {Episode, PodcastSeriesType} from '../../../api/types';

type PodcastEpisodeListProps = {
  episodes: Episode[] | undefined;
};

const PodcastEpisodeList = ({episodes}: PodcastEpisodeListProps) => {
  return (
    <FlatList
      style={{marginBottom: 40}}
      data={episodes}
      renderItem={({item}) => <PodcastEpisode episode={item} />}
      keyExtractor={item => item.name}
    />
  );
};

export default PodcastEpisodeList;
