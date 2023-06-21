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
import {EpisodeTitle} from './EpisodeTitle';
import {Description} from './Description/Description';
import {PlayerContext} from '../../providers/PlayerProvider';

const PlayerScreen = () => {
  const {
    currentTrackIndex,
    currentTrack,
    controls,
    progressBarDuration,
    progressBarPosition,
  } = useContext(PlayerContext);

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
