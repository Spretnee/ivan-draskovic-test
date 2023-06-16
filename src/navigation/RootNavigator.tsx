import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {theme} from '../theme/theme';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import {RootStackParamList} from './types';
import {useGetPodcast} from '../hooks/useGetPodcast';
import {PodcastPreviewScreen} from '../screens/PodcastPreviewScreen/PodcastPreviewScreen';
import {addPlaylist} from '../screens/PlayerScreen/utils/addPlaylist';
import {PlayerContext, PlayerStateProvider} from '../providers/PlayerProvider';
import {usePlayer} from '../utils/player/playerSetup';
import TrackPlayer, {Track} from 'react-native-track-player';
import {ActivityIndicator, View} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const {data} = useGetPodcast(`f88dab6c-9418-4b4d-8440-50e1647d205c`);

  const {queue} = usePlayer(data?.data.getPodcastSeries);
  console.log(queue);

  return (
    <NavigationContainer theme={theme}>
      <PlayerStateProvider queue={queue}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="PodcastPreview"
            component={PodcastPreviewScreen}
          />
          <Stack.Screen name="Player" component={PlayerScreen} />
        </Stack.Navigator>
      </PlayerStateProvider>
    </NavigationContainer>
  );
};
