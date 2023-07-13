import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import YourPodcastsScreen from '../screens/YourPodcastsScreen/YourPodcastsScreen';
import { ModalPlayer } from '../components/ModalPlayer';
import { SearchScreen } from '../screens/SearchScreen/SearchScreen';
import { SvgXml } from 'react-native-svg';
import { HOME, PODCAST_LIBRARY, SEARCH } from '../assets/images/svg';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchStackNavigator } from './SearchStackNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  //TODO: integrate bottom sheet modal with tab navigator
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        //TODO: tidy up
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <SvgXml
                style={{
                  width: focused ? 30 : size,
                  height: focused ? 30 : size,
                }}
                xml={HOME}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <SvgXml
                style={{
                  width: focused ? 30 : size,
                  height: focused ? 30 : size,
                }}
                xml={SEARCH}
              />
            );
          }

          return (
            <SvgXml
              style={{
                width: focused ? 30 : size,
                height: focused ? 30 : size,
              }}
              xml={PODCAST_LIBRARY}
            />
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" options={{}} component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="Your Library" component={YourPodcastsScreen} />
    </Tab.Navigator>
  );
};
