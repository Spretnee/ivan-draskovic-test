import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../theme/theme';
import {RootStackParamList} from './types';
import {useGetPodcast} from '../hooks/useGetPodcast';
import {PlayerStateProvider} from '../providers/PlayerProvider';
import {usePlayer} from '../hooks/usePlayer';
import {TabNavigation} from './TabNavigation';
import {ModalPlayer} from '../components/ModalPlayer/ModalPlayer';
import {MOCK_PODCAST_ID} from '../api/constants';
import {BottomSheetPlayer} from '../components/BottomSheetPlayer/BottomSheetPlayer';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const data = useGetPodcast(MOCK_PODCAST_ID);
  const {queue} = usePlayer(data.data);
  // console.log(queue);

  return (
    <NavigationContainer theme={theme}>
      <PlayerStateProvider queue={queue}>
        <TabNavigation />
        <ModalPlayer />
      </PlayerStateProvider>
    </NavigationContainer>
  );
};
