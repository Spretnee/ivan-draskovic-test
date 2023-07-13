import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from '../screens/SearchScreen/SearchScreen';
import { CategoryScreen } from '../screens/CategoryScreen';
import { PodcastsScreen } from '../screens/PodcastsScreen/PodcastsScreen';

const Stack = createNativeStackNavigator();

export const SearchStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={SearchScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="PodcastDetails" component={PodcastsScreen} />
    </Stack.Navigator>
  );
};
