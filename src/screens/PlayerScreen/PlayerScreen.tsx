import {
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenPropsPlayer} from '../../navigation/types';
import {Header} from './Header';
import {BottomBar} from './BottomBar';
import {TranscriptionButton} from './TranscriptionButton';
import {Slider} from './Slider';
import {Image} from './Image/Image';
import {EpisodeTitle} from './EpisodeTitle';
import {Description} from './Description/Description';
import {addPlaylist} from './utils/addPlaylist';
import {useGetPodcastEpisode} from '../../hooks/useGetEpisode';
import {EPISODE_ID} from '../../api/constants';
import {GREEN} from '../../constants/colors';

const PlayerScreen = ({route}: ScreenPropsPlayer) => {
  const {data: episode} = useGetPodcastEpisode(
    `a098b77c-6ba3-4783-8381-94bc81328460`,
  );
  // TODO: solve  GetPodcastEpisode | undefined
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View
        style={{
          paddingVertical: 32,
          paddingHorizontal: 21,
        }}>
        <Image uri={episode?.imageUrl} />
        <EpisodeTitle title={episode?.name} />
        <Slider />
        <TranscriptionButton />
        <Description description={episode?.description} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default PlayerScreen;
