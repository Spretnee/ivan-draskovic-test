import { View, Pressable, ScrollView, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScreenPropsPlayer } from '../../navigation/types';
import { Header } from './Header';
import { BottomBar } from './BottomBar';
import { TranscriptionButton } from './TranscriptionButton';
import { Slider } from './Slider';
import { Image } from './Image/Image';
import { EpisodeTitle } from './EpisodeTitle';
import { Description } from './Description/Description';
import { addPlaylist } from './utils/addPlaylist';

const PlayerScreen = ({ route }: ScreenPropsPlayer) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View
        style={{
          paddingVertical: 32,
          paddingHorizontal: 21,
        }}
      >
        <TranscriptionButton />
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default PlayerScreen;
