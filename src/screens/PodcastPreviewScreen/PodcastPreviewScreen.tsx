import {View, Text, ImageComponent, FlatList} from 'react-native';
import React from 'react';
import {Image} from '../PlayerScreen/Image/Image';
import {useGetPodcast} from '../../hooks/useGetPodcast';
import {EpisodeTitle} from '../PlayerScreen/EpisodeTitle';
import {Description} from '../PlayerScreen/Description/Description';
import {Header} from '../PlayerScreen/Header';
import {addPlaylist} from '../PlayerScreen/utils/addPlaylist';
import PodcastEpisodeList from './PodcastEpisodeList/PodcastEpisodeList';
import {Episode} from '../../api/types';
import {PodcastEpisodeListType} from './PodcastEpisodeList/types';

export const PodcastPreviewScreen = () => {
  const {data: podcast} = useGetPodcast(`This American Life`);
  console.log(podcast);

  const episodeListElement = podcast?.episodes.map((episode: Episode) => (
    <PodcastEpisodeList name={episode.name} description={episode.description} />
  ));

  return (
    <View>
      <Header />
      <Image uri={podcast?.imageUrl} />
      <EpisodeTitle title={podcast?.name} />
      <Description description={podcast?.description} />
      <FlatList
        data={podcast?.episodes}
        renderItem={({item}) => (
          <PodcastEpisodeList name={item.name} description={item.description} />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
