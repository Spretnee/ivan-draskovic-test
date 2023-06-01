import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen';
import {theme} from '../theme/theme';
import PlayerScreen from '../screens/PlayerScreen/PlayerScreen';

export type StackParamList = {
  Home: undefined;
  Player?: {userId: string};
};

const Stack = createNativeStackNavigator<StackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" options={{}} component={HomeScreen} />
        <Stack.Screen name="Player" options={{}} component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
