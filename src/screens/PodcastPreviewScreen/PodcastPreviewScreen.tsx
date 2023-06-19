import React, {useContext} from 'react';
import {Image} from '../PlayerScreen/Image/Image';
import {EpisodeTitle} from '../PlayerScreen/EpisodeTitle';
import {Description} from '../PlayerScreen/Description/Description';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/types';
import PodcastEpisodeList from './PodcastEpisodeList/PodcastEpisodeList';
import {PlayerContext} from '../../providers/PlayerProvider';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type PodcastPreviewScreenProps = BottomTabScreenProps<
  RootStackParamList,
  'PodcastPreview'
>;

export const PodcastPreviewScreen = ({route}: PodcastPreviewScreenProps) => {
  const {controls, currentTrack, currentTrackIndex, queue} =
    useContext(PlayerContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image url={currentTrack?.artist} />
      <EpisodeTitle title={currentTrack?.name} />
      <Description description={currentTrack?.description} />
      <PodcastEpisodeList />
    </SafeAreaView>
  );
};
