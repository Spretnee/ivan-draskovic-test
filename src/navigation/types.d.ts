import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthUser, Episode} from '../api/types';

export type RootStackParamList = {
  Home: {episode: Episode};
  Player: {episode: Episode};
  PodcastPreview: undefined;
};

export type ScreenPropsHome = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type ScreenPropsPlayer = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>;
export type ScreenPropsPodcastPreview = NativeStackScreenProps<
  RootStackParamList,
  'Player'
>;
