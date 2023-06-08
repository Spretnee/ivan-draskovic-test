import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthUser, Episode} from '../api/types';

export type RootStackParamList = {
  Home: {episode: Episode; user: AuthUser};
  Player: {episode: Episode; user: AuthUser};
};

export type ScreenPropsHome = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ScreenPropsPlayer = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>;
