import {FlatList, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {PodcastEpisode} from './PodcastEpiode';
import {PlayerContext} from '../../../providers/PlayerProvider';

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
