import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { useGetPodcast } from '../hooks/useGetPodcast';
import { PlayerStateProvider } from '../providers/PlayerProvider';
import { TabNavigation } from './TabNavigation';
import { ModalPlayer } from '../components/ModalPlayer/ModalPlayer';
import { MOCK_PODCAST_ID } from '../api/constants';
import { useLoadPlaylist } from '../hooks/useLoadPlaylist';

export const RootNavigator = () => {
  const data = useGetPodcast(MOCK_PODCAST_ID);
  const { queue } = useLoadPlaylist(data.data);

  return (
    <NavigationContainer theme={theme}>
      <PlayerStateProvider queue={queue}>
        <TabNavigation />
        <ModalPlayer />
      </PlayerStateProvider>
    </NavigationContainer>
  );
};
