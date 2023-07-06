import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../theme/theme';
import {useGetPodcast} from '../hooks/useGetPodcast';
import {PlayerStateProvider} from '../providers/PlayerProvider';
import {useSetupPlayer} from '../hooks/useSetupPlayer';
import {TabNavigation} from './TabNavigation';
import {ModalPlayer} from '../components/ModalPlayer/ModalPlayer';
import {MOCK_PODCAST_ID} from '../api/constants';
import {useLoadPlaylist} from '../hooks/useLoadPlaylist';
import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import styles from '../screens/HomeScreen/HomeScreen.styles';
import {GREEN} from '../constants/colors';

export const RootNavigator = () => {
  const data = useGetPodcast(MOCK_PODCAST_ID);
  const {isPlayerReady} = useSetupPlayer();
  const {queue} = useLoadPlaylist(data.data);

  if (!isPlayerReady) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color={GREEN} />
      </SafeAreaView>
    );
  } else {
    return (
      <NavigationContainer theme={theme}>
        <PlayerStateProvider queue={queue}>
          <TabNavigation />
          <ModalPlayer />
        </PlayerStateProvider>
      </NavigationContainer>
    );
  }
};
