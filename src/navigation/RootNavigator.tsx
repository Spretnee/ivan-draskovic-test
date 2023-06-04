import React, {useDebugValue, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {theme} from '../theme/theme';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import {RootStackParamList} from './types';
import {CREDENTIALS, EPISODE_ID} from '../api/constants';
import {useGetUser} from '../api/hooks/useGetUser';
import {useGetEpisode} from '../api/hooks/useGetEpisode';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const {data: user} = useGetUser(CREDENTIALS);

  const {data: episode} = useGetEpisode(EPISODE_ID);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          initialParams={{episode}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
