import {
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {RootStackParamList, ScreenPropsPlayer} from '../../navigation/types';
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
import TrackPlayer, {Track} from 'react-native-track-player';
import {INITIAL_TRACK} from '../../constants/player';
import {PlayerContext} from '../../providers/PlayerProvider';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';

const PlayerScreen = () => {
  const {track} = useRoute<RouteProp<RootStackParamList, 'Player'>>().params;

  const {
    currentTrackIndex,
    currentTrack,
    controls,
    progressBarDuration,
    progressBarPosition,
  } = useContext(PlayerContext);
  console.log('trackId', track.id);

  //TODO: const {controls,currentTrack} = usePlayer(queue:Track[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View
        style={{
          paddingVertical: 32,
          paddingHorizontal: 21,
        }}>
        {/* <Image url={currentTrack?.artwork} /> */}
        <EpisodeTitle title={currentTrack.title} />
        <Slider
          controls={controls}
          duration={progressBarDuration}
          position={progressBarPosition}
        />
        <TranscriptionButton />
        <Description description={currentTrack.description} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default PlayerScreen;
