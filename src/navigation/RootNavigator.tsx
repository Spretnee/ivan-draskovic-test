import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../theme/theme';
import {useGetPodcast} from '../hooks/useGetPodcast';
import {PlayerStateProvider} from '../providers/PlayerProvider';
import {useSetupPlayer} from '../hooks/useSetupPlayer';
import {TabNavigation} from './TabNavigation';
import {ModalPlayer} from '../components/ModalPlayer/ModalPlayer';
import {MOCK_PODCAST_ID} from '../api/constants';

export const RootNavigator = () => {
  const data = useGetPodcast(MOCK_PODCAST_ID);
  const {queue} = useSetupPlayer(data.data);

  return (
    <NavigationContainer theme={theme}>
      <PlayerStateProvider queue={queue}>
        <TabNavigation />
        <ModalPlayer />
      </PlayerStateProvider>
    </NavigationContainer>
  );
};
