import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { TabNavigation } from './TabNavigation';
import { ModalPlayer } from '../components/ModalPlayer/ModalPlayer';
import { usePlayerEvents } from '../hooks/usePlayerEvents';

export const RootNavigator = () => {
  usePlayerEvents();

  return (
    <NavigationContainer theme={theme}>
      <TabNavigation />
      <ModalPlayer />
    </NavigationContainer>
  );
};
