import {Track} from 'react-native-track-player';
import {Controls} from '../hooks/types';
import {Queue} from '../api/types';
import {TrackWithId} from '../types';

export type PlayerStateProviderProps = {
  children: React.ReactNode;
  queue: Track[] | undefined;
};
export type MultiTrackProgress = Record<string, number>;

export type PlayerStateContextType = {
  isPlaying: boolean;
  isReady: boolean;
  isPaused: boolean;
  isIdle: boolean;
  isBuffering: boolean;
  isConnecting: boolean;

  currentTrack: TrackWithId | Track;
  currentTrackIndex: number | null;

  queue: Track[] | undefined;
  controls: Controls;
  getTrackPosition: (truckId: string) => number;
};
