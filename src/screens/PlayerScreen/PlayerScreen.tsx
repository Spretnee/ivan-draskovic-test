import {View, Pressable, ScrollView, SafeAreaView} from 'react-native';
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

const PlayerScreen = ({route}: ScreenPropsPlayer) => {
  const {episode} = route.params;
  console.log(episode);
  addPlaylist(episode);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View
        style={{
          paddingVertical: 32,
          paddingHorizontal: 21,
        }}>
        <Image uri={episode.image} />
        <EpisodeTitle title={episode.title} />
        <Slider />
        <TranscriptionButton />
        <Description description={episode.summary} />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default PlayerScreen;
