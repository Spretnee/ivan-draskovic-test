import React from 'react';
import {BottomSheetProvider} from '../providers/BottomSheetProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen} from '../screens/HomeScreen';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';
import {PodcastPreviewScreen} from '../screens/PodcastPreviewScreen/PodcastPreviewScreen';
import {theme} from '../theme/theme';
import GreetingsScreen from '../screens/GreetingsScreen/GreetingsScreen';
import YourPodcastsScreen from '../screens/YourPodcastsScreen/YourPodcastsScreen';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Greetings"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Greetings" component={GreetingsScreen} />
      <Tab.Screen name="YourPodcasts" component={YourPodcastsScreen} />
    </Tab.Navigator>
  );
};
