import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Episode} from '../api/types';

export type RootStackParamList = {
  Home: undefined;
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
