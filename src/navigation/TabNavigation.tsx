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
import {ModalPlayer} from '../components/ModalPlayer';
import {SearchScreen} from '../screens/SearchScreen/SearchScreen';
import {SvgXml} from 'react-native-svg';
import {HOME, PODCAST_LIBRARY, SEARCH} from '../assets/images/svg';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  //TODO: integrate bottom sheet modal with tab navigator
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
              style={{width: focused ? 30 : size, height: focused ? 30 : size}}
              xml={PODCAST_LIBRARY}
            />
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" options={{}} component={GreetingsScreen} />
      <Tab.Screen name="Search" component={YourPodcastsScreen} />
      <Tab.Screen name="Your Library" component={SearchScreen} />
    </Tab.Navigator>
  );
};
