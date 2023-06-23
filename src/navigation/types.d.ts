import {
  NativeStackScreenProps,
  BottomTabScreenProps,
} from '@react-navigation/native-stack';
import {AuthUser, Episode, PodcastSeriesType} from '../api/types';

export type RootStackParamList = {
  Home: {};
  Player: undefined;
  PodcastPreview: {};
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
  'PodcastPreview'
>;
