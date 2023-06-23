import {View, Text} from 'react-native';
import React from 'react';
import {Title} from '../HomeScreen/Title';
import {BottomSheetPlayer} from '../../components/BottomSheetPlayer/BottomSheetPlayer';
import {useNavigation} from '@react-navigation/native';

const GreetingsScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Title />
    </View>
  );
};

export default GreetingsScreen;
