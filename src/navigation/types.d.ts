import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Episode} from '../api/types';

export type RootStackParamList = {
  Home: {episode: Episode};
  Player: {episode: Episode};
};

export type ScreenPropsHome = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ScreenPropsPlayer = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>;
