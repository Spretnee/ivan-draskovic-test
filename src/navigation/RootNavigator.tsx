import React, {useDebugValue, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {theme} from '../theme/theme';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import {RootStackParamList} from './types';
import {CREDENTIALS, EPISODE_ID} from '../api/constants';
import {useAuthUser} from '../hooks/useAuthUser';
import {useGetEpisode} from '../hooks/useGetEpisode';
import {storeAccessToken} from '../utils/keychain';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const {data: user} = useAuthUser(CREDENTIALS);
  const {data: episode} = useGetEpisode(EPISODE_ID);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{episode, user}}
        />
        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          initialParams={{episode, user}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
