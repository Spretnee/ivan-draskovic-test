import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { useGetPodcast } from '../hooks/useGetPodcast';
import { PlayerStateProvider } from '../providers/PlayerProvider';
import { TabNavigation } from './TabNavigation';
import { ModalPlayer } from '../components/ModalPlayer/ModalPlayer';
import { MOCK_PODCAST_ID } from '../api/constants';
import { useLoadPlaylist } from '../hooks/useLoadPlaylist';
import { usePlayerEvents } from '../hooks/usePlayerEvents';

export const RootNavigator = () => {
  const data = useGetPodcast(MOCK_PODCAST_ID);
  usePlayerEvents();
  useLoadPlaylist(data.data);

  return (
    <NavigationContainer theme={theme}>
      <PlayerStateProvider>
        <TabNavigation />
        <ModalPlayer />
      </PlayerStateProvider>
    </NavigationContainer>
  );
};
